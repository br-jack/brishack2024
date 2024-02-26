import { ensureAuth } from "../auth/session.get";

export default eventHandler(async (event) => {
  interface bodyData {
    medName: string;
    frequency: string;
  }
  const result: bodyData = await readBody(event);
  const session = ensureAuth(event);
});
