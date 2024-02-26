import jwt from "jsonwebtoken";
import { PPTHExists, verifyCivUser, verifyIntUser, verifyMedUser } from "../dbFuncs";
import { databaseFillData } from "../dbDummyData";

const refreshTokens: Record<number, Record<string, any>> = {};
export const SECRET = "This is a super strong and powerful secret";
const UNATHORIZED_USER = createError({
  statusCode: 403,
  statusMessage: "Unathorized user",
});

export default eventHandler(async (event) => {
  const result = await readBody(event);
  const { username, password, type } = result;
  if (!await PPTHExists()) {
    await databaseFillData();
  }
  let validUser;
  if (type === "MED") {
    validUser = await verifyMedUser(username, password);
  }
  if (type === "CIV") {
    validUser = await verifyCivUser(username, password);
  }
  if (type === "INT") {
    validUser = await verifyIntUser(username, password);
  }

  if (!validUser) {
    throw UNATHORIZED_USER;
  }

  const expiresIn = 60 * 60 * 24;
  const refreshToken =
    Math.floor(Math.random() * (1000000000000000 - 1 + 1)) + 1;
  const user = {
    username,
    type,
  };

  const accessToken = jwt.sign({ ...user, scope: ["user"] }, SECRET, {
    expiresIn,
  });
  refreshTokens[refreshToken] = {
    accessToken,
    user,
  };

  return {
    token: {
      accessToken,
      refreshToken,
    },
  };
});
