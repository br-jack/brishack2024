import { insertMedUser, medUsernameAvailable } from "../dbFuncs"
import { ensureAuth } from "./session.get"

export default eventHandler(async (event) => {
  interface bodyData {
    name: string,
    username: string,
    password: string,
  }
  const r: bodyData = await readBody(event)
  const session = ensureAuth(event)

  if (session.type !== 'INT') {
    throw createError({ status: 403, statusMessage: 'Need to be instiution' })
  }

  if (!medUsernameAvailable(r.username)) {
    throw createError({ status: 409, statusMessage: 'User Exists' })
  }

  await insertMedUser(r.username, r.password, r.name, session.username)
})
