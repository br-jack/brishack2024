import { insertCivUser } from "../dbFuncs";

export default eventHandler(async (event) => {
  interface bodyData {
    name: string,
    username: string,
    phoneNumber: string,
    password: string,
    infoPublic: boolean,
    dateOfBirth: number,
    bloodType: string,
    organDonor: boolean
  }
  const result: bodyData = await readBody(event)

  // await insertCivUser();
})
