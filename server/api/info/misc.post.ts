import { ensureAuth } from "../auth/session.get";
import { insertInformation } from "../dbFuncs";

export default eventHandler(async (event) => {
  interface bodyData {
    infoName: string;
    newInfo: string;
  }
  const result: bodyData = await readBody(event);
  const session = ensureAuth(event);
  insertInformation(session.username, result.infoName, result.newInfo);
});
