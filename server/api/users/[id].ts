export default defineEventHandler((event) => {
  const name = getRouterParam(event, "id")
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
