import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// INSERT INTO Institution VALUES (${username}, ${passwordHash}, ${name})
const insertInstitution = async (username: string, password: string, name: string) => {
    await prisma.institution.create({
        data: {
            InstUsername: username,
            PasswordHash: hash(password),
            Name: name,
        }
    })
}

// INSERT INTO MedUsers VALUES (${username}, ${passwordHash}, ${name}, ${instUsername})
const insertMedUser = async (username: string, password: string, name: string, instUsername: string) => {
    await prisma.medUsers.create({
        data: {
            MedUsername: username,
            PasswordHash: hash(password),
            Name: name,
            InstUsername: instUsername,
        }
    })
}

// INSERT INTO CivUsers VALUES (${username}, ${name}, ${number}, ${passwordHash}, ${infoPublicallyAvailable}, ${dateOfBirth}, ${bloodType}, ${organDonor})
const insertCivUser = async (username: string, name: string, number: string, password: string, infoPublicallyAvailable: boolean, dateOfBirth: Date, bloodType: string, organDonor: boolean) => {
    await prisma.civUsers.create({
        data: {
            CivUsername: username,
            Name: name,
            Number: number,
            PasswordHash: hash(password),
            InfoPublicallyAvailable: infoPublicallyAvailable,
            DateOfBirth: dateOfBirth,
            BloodType: bloodType,
            OrganDonor: organDonor,
        }
    })
}

// SELECT Name, Number, InfoPublicallyAvailable, DateOfBirth, BloodType, OrganDonor FROM CivUsers WHERE CivUsername == “${username}”
// SELECT InformationID, InfoName, AddInfo FROM Information WHERE CivUsername == “${username}”
// SELECT MedicationID, MedicationName, DoseFrequency, AdditionalNotes FROM Medication WHERE CivUsername == “${username}”

// for control panel and for when we've scanned a tag + validated access perm
const getUserInfo = async (username: string) => {
    const mainUserInfo = await prisma.civUsers.findUnique({
        where: {
            CivUsername: username
        },
        include: {
            information: true,
            medications: true,
        }
    })
}

// UPDATE CivUsers SET Name = “${newName}”, Number = “${newNumber}”, InfoPublicallyAvailable = “${new InfoPublicallyAvailable}”, PasswordHash = “${newPasswordHash}”,  DateOfBirth = “${newDateOfBirth}”, BloodType = “${newBloodType]”, OrganDonor = “${newOrganDonor}” WHERE CivUsername == “${username}”
const updateUserProfile = async (username: string, newName: string, newNumber: string, newInfoPublicallyAvailable: boolean, newPassword: string, newDateOfBirth: Date, newBloodType: string, newOrganDonor: boolean) => {
    await prisma.civUsers.update({
        where: {
            CivUsername: username
        },
        data: {
            Name: newName,
            Number: newNumber,
            InfoPublicallyAvailable: newInfoPublicallyAvailable,
            PasswordHash: hash(newPassword),
            DateOfBirth: newDateOfBirth,
            BloodType: newBloodType,
            OrganDonor: newOrganDonor,
        }
    })
}

// INSERT INTO Information (CivUsername, InfoName, AddInfo) VALUES (“${username}”, “${infoTitle}”, “${infoDes}”)
const insertInformation = async (username: string, infoTitle: string, infoDes: string) => {
    await prisma.information.create({
        data: {
            CivUsername: username,
            InfoName: infoTitle,
            AddInfo: infoDes,
        }
    })
}

// INSERT INTO Medication (CivUsername, MedicationName, DoseFrequency, AdditionalNotes) VALUES (“${username}”, “${medicationName}”,” ${doseFrequency}”, “${notes}”)
const insertMedication = async (username: string, medicationName: string, doseFrequency: string, notes: string) => {
    await prisma.medication.create({
        data: {
            CivUsername: username,
            MedicationName: medicationName,
            DoseFrequency: doseFrequency,
            AdditionalNotes: notes,
        }
    })
}

// DELETE FROM Information WHERE InformationID == “${informationID}”
const deleteInformation = async (informationID: number) => {
    await prisma.information.delete({
        where: {
            InformationID: informationID
        }
    })
}

// DELETE FROM Medication WHERE MedicationID == “${medicationID}”
const deleteMedication = async (medicationID: number) => {
    await prisma.medication.delete({
        where: {
            MedicationID: medicationID
        }
    })
}

// INSERT INTO Tag (CivUsername, Name) VALUES (${username}, ${tagName})
const registerTag = async (username: string, tagName: string) => {
    await prisma.tag.create({
        data: {
            CivUsername: username,
            Name: tagName,
        }
    })
}

// SELECT CivUsername FROM CivUsers WHERE CivUsername == “${inputUsername}” AND PasswordHash == “${inputPasswordHash}”
const verifyCivUser = async (inputUsername: string, inputPassword: string) => {
    const user = await prisma.civUsers.findUnique({
        where: {
            CivUsername: inputUsername
        }
    })
    if (user == null) {
        return false
    }
    if (user.PasswordHash === hash(inputPassword)) {
        return true
    }
    return false
}

// SELECT CivUsername FROM Tag WHERE TagID == “${tagID}”
const getTagOwner = async (tagID: number) => {
    const tag = await prisma.tag.findUnique({
        where: {
            TagID: tagID
        }
    })
    if (tag == null) {throw new Error('Tag not found')}
    return tag.CivUsername
}

// SELECT InfoPublicallyAvailable FROM CivUsers WHERE CivUsername == “${username}”
const hasInfoPublicallyAvailable = async (username: string) => {
    const user = await prisma.civUsers.findUnique({
        where: {
            CivUsername: username
        }
    })
    if (user == null) {throw new Error('User not found')}
    return user.InfoPublicallyAvailable
}
// SELECT MedUsername FROM MedUsers WHERE MedUsername == “${username}”
const verifyMedUser = async (username: string) => {
    const user = await prisma.medUsers.findUnique({
        where: {
            MedUsername: username
        }
    })
    if (user == null) {
        return false
    }
    return true
}

const canAccessUserdata = async (requester: string, target: string) => {
    return hasInfoPublicallyAvailable(target) || verifyMedUser(requester)
}