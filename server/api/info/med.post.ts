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
  console.log(result)
  insertMedication(session.username, result.medicationName, result.doseFrequency, result.additionalInfo)
});
