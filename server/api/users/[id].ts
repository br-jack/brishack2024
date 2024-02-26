import { ensureAuth } from '../auth/session.get';
import { databaseFillData } from '../dbDummyData';
import { getUserInfo } from '../dbFuncs';

export default defineEventHandler(async (event) => {
  const name = getRouterParam(event, "id");

  const session = ensureAuth(event)

  // console.log(await databaseFillData())
  let person = await getUserInfo("Kermit")
  console.log(person)

  return {
    name: name,
    medicalConditions: [
      "A",
      "B",
      "C"
    ],
    bloodType: "O+",
    allergies: [
      "D",
      "E",
      "F"
    ],
    currentMedicines: [
      "DRUG",
      "MORE DRUG"
    ],
    weight: 12.3,
    height: 1.85,
    dateOfBirth: Date.now(),
    address: "Woodland road",
    organDoner: false,
    medicalNotes: [
      "note 1",
      "note 2"
    ]
  }
})
