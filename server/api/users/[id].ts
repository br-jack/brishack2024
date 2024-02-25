import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
  const name = getRouterParam(event, "id");
  console.log(name);

  const session = await getServerSession(event)
  console.log(session)

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
