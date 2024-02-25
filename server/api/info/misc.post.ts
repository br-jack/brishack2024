import { ensureAuth } from "../auth/session.get"

export default eventHandler(async (event) => {
  interface bodyData {
    infoName: string,
    newInfo: string,
  }
  const result: bodyData = await readBody(event)
  const session = ensureAuth(event)

})
