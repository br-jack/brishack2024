import bcrypt from "bcrypt";
const SALT_ROUNDS = 10;

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
  let userHash;
  bcrypt
    .hash(result.password, SALT_ROUNDS)
    .then(hash => {
      userHash = hash
    })
    .catch(err => console.error(err.message))

})
