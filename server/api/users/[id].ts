import { ensureAuth } from "../auth/session.get";
import { getUserInfo } from "../dbFuncs";

export default defineEventHandler(async (event) => {
  const name = getRouterParam(event, "id");

  let session;
  try {
    session = ensureAuth(event);
  } catch {
    session = { type: "CIV" };
  }

  let person = await getUserInfo(name!);
  if (!person) {
    throw createError({ statusCode: 418, statusMessage: "YOURE A TEAPOT" });
  }

  person.PasswordHash = "";

  if (session.type === "MED" || person?.InfoPublicallyAvailable) {
    return person;
  }

  person.information = [];
  person.medications = [];
  return person;
});
