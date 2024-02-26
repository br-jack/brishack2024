import { getOwnerTag } from "../dbFuncs";
import { ensureAuth } from "../auth/session.get";

export default defineEventHandler(async (event) => {
  const session = ensureAuth(event);

  return await getOwnerTag(session.username);
});
