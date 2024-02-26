import { PrismaClient } from '@prisma/client'
import { insertCivUser, insertInformation, insertInstitution, insertMedUser, insertMedication, registerTag } from './dbFuncs'

const prisma = new PrismaClient()

export const databaseFillData = async () => {
    // INSERT INTO Institution VALUES ('PPTH', 'Placeholder', 'Princeton-Plainsboro Teaching Hospital');
    await insertInstitution('PPTH', 'Placeholder', 'Princeton-Plainsboro Teaching Hospital');
    // INSERT INTO MedUsers VALUES ('House', 'Placeholder', 'Gregory House', 'PPTH');
    await insertMedUser('House', 'Placeholder', 'Gregory House', 'PPTH');
    // INSERT INTO MedUsers VALUES ('Wilson', 'Placeholder', 'James Wilson', 'PPTH');
    await insertMedUser('Wilson', 'Placeholder', 'James Wilson', 'PPTH');
    // INSERT INTO MedUsers VALUES ('Cuddy', 'Placeholder', 'Lisa Cuddy', 'PPTH');
    await insertMedUser('Cuddy', 'Placeholder', 'Lisa Cuddy', 'PPTH');
    // INSERT INTO CivUsers VALUES ('Kermit', 'Kermit the Frog', '01234 567 890', 'Placeholder', 1, 1955-05-09, 'O-', 1);
    await insertCivUser('Kermit', 'Kermit the Frog', '01234 567 890', 'Placeholder', true, new Date('1955-05-09'), 'O-', true);
    // INSERT INTO CivUsers VALUES ('Piggy', 'Miss Piggy', '01234 567 891', 'Placeholder', 0, 1974-05-09, 'A+', 0);
    await insertCivUser('Piggy', 'Miss Piggy', '01234 567 891', 'Placeholder', false, new Date('1974-05-09'), 'A+', false);
    // INSERT INTO Information (CivUsername, InfoName, AddInfo) VALUES ('Kermit', 'Allergies', 'Peanuts');
    await insertInformation('Kermit', 'Allergies', 'Peanuts');
    // INSERT INTO Medication (CivUsername, MedicationName, DoseFrequency, AdditionalNotes) VALUES ('Kermit', 'Suspicious pills', 'Once a day', 'Take with food');
    await insertMedication('Kermit', 'Suspicious pills', 'Once a day', 'Take with food');
    // INSERT INTO Information (CivUsername, InfoName, AddInfo) VALUES ('Kermit', 'Froggy', 'Yes');
    await insertInformation('Kermit', 'Froggy', 'Yes');
    // INSERT INTO Medication (CivUsername, MedicationName, DoseFrequency, AdditionalNotes) VALUES ('Kermit', 'Unsuspicious pills', 'Once a day', 'Take with food');
    await insertMedication('Kermit', 'Unsuspicious pills', 'Once a day', 'Take with food');
    // INSERT INTO Tag (CivUsername, Name) VALUES ('Kermit', 'Car Tag');
    await registerTag('Kermit', 'Car Tag');
    // INSERT INTO Tag (CivUsername, Name) VALUES ('Kermit', 'Bike Tag');
    await registerTag('Kermit', 'Bike Tag');

}
