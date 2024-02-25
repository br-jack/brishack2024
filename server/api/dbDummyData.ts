import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const databaseFillData = async () => {
    await prisma.institution.create({
        data: {
            InstUsername: 'PPTH',
            PasswordHash: 'Placeholder',
            Name: 'Princeton-Plainsboro Teaching Hospital',
        }
    })
    await prisma.medUsers.create({
        data: {
            MedUsername: 'House',
            PasswordHash: 'Placeholder',
            Name: 'Gregory House',
            InstUsername: 'PPTH',
        }
    })
    await prisma.medUsers.create({
        data: {
            MedUsername: 'Wilson',
            PasswordHash: 'Placeholder',
            Name: 'James Wilson',
            InstUsername: 'PPTH',
        }
    })
    await prisma.medUsers.create({
        data: {
            MedUsername: 'Cuddy',
            PasswordHash: 'Placeholder',
            Name: 'Lisa Cuddy',
            InstUsername: 'PPTH',
        }
    })
    await prisma.civUsers.create({
        data: {
            CivUsername: 'Kermit',
            Name: 'Kermit the Frog',
            Number : '01234567890',
            PasswordHash: 'Placeholder',
            InfoPublicallyAvailable: true,
            DateOfBirth: new Date(1955, 5, 9),
            BloodType: 'O-',
            OrganDonor: true,
        }
    })
    await prisma.civUsers.create({
        data: {
            CivUsername: 'Piggy',
            Name: 'Miss Piggy',
            Number: '01234567890',
            PasswordHash: 'Placeholder',
            InfoPublicallyAvailable: false,
            DateOfBirth: new Date(1974, 5, 9),
            BloodType: 'A+',
            OrganDonor: false,
        }
    })
    await prisma.civContact.create({
        data: {
            CivUsername: 'Kermit',
            RelationToCiv: 'Friend',
            Name: 'Fozzie Bear',
            Number: '01234567890',
        }
    })
    await prisma.civContact.create({
        data: {
            CivUsername: 'Piggy',
            RelationToCiv: 'Friend',
            Name: 'Fozzie Bear',
            Number: '01234567890',
        }
    })
    await prisma.information.create({
        data: {
            CivUsername: 'Kermit',
            InfoName: 'Allergies',
            AddInfo: 'Peanuts',
        }
    })
}
