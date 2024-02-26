-- CreateTable
CREATE TABLE "CivUsers" (
    "CivUsername" TEXT NOT NULL PRIMARY KEY,
    "Name" TEXT NOT NULL,
    "Number" TEXT,
    "PasswordHash" TEXT NOT NULL,
    "InfoPublicallyAvailable" BOOLEAN NOT NULL DEFAULT false,
    "DateOfBirth" DATETIME,
    "BloodType" TEXT,
    "OrganDonor" BOOLEAN
);

-- CreateTable
CREATE TABLE "Tag" (
    "TagID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "CivUsername" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    CONSTRAINT "Tag_CivUsername_fkey" FOREIGN KEY ("CivUsername") REFERENCES "CivUsers" ("CivUsername") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CivContact" (
    "CivContactID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "CivUsername" TEXT NOT NULL,
    "RelationToCiv" TEXT,
    "Name" TEXT NOT NULL,
    "Number" TEXT,
    CONSTRAINT "CivContact_CivUsername_fkey" FOREIGN KEY ("CivUsername") REFERENCES "CivUsers" ("CivUsername") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Information" (
    "InformationID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "CivUsername" TEXT NOT NULL,
    "InfoName" TEXT NOT NULL,
    "AddInfo" TEXT,
    CONSTRAINT "Information_CivUsername_fkey" FOREIGN KEY ("CivUsername") REFERENCES "CivUsers" ("CivUsername") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Medication" (
    "MedicationID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "CivUsername" TEXT NOT NULL,
    "MedicationName" TEXT NOT NULL,
    "DoseFrequency" TEXT NOT NULL,
    "AdditionalNotes" TEXT,
    CONSTRAINT "Medication_CivUsername_fkey" FOREIGN KEY ("CivUsername") REFERENCES "CivUsers" ("CivUsername") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Institution" (
    "InstUsername" TEXT NOT NULL PRIMARY KEY,
    "PasswordHash" TEXT NOT NULL,
    "Name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "MedUsers" (
    "MedUsername" TEXT NOT NULL PRIMARY KEY,
    "PasswordHash" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "InstUsername" TEXT NOT NULL,
    CONSTRAINT "MedUsers_InstUsername_fkey" FOREIGN KEY ("InstUsername") REFERENCES "Institution" ("InstUsername") ON DELETE RESTRICT ON UPDATE CASCADE
);
