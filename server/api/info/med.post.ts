import { ensureAuth } from "../auth/session.get";
import { insertMedication } from "../dbFuncs";

export default eventHandler(async (event) => {
  interface bodyData {
    civUsername: string;
    medicationName: string;
    doseFrequency: string;
    additionalInfo: string;
  }
  const result: bodyData = await readBody(event);
  const session = ensureAuth(event);
  insertMedication(result.civUsername, result.medicationName, result.doseFrequency, result.additionalInfo)
});
