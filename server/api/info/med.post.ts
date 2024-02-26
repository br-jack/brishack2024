import { ensureAuth } from "../auth/session.get";
import { insertMedication } from "../dbFuncs";

export default eventHandler(async (event) => {
  interface bodyData {
    medicationName: string;
    doseFrequency: string;
    additionalInfo: string;
  }
  const result: bodyData = await readBody(event);
  const session = ensureAuth(event);
  insertMedication(session.username, result.medicationName, result.doseFrequency, result.additionalInfo)
});
