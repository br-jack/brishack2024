import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt";

const refreshTokens: Record<number, Record<string, any>> = {}
export const SECRET = 'This is a super strong and powerful secret'
const UNATHORIZED_USER = createError({ statusCode: 403, statusMessage: "Unathorized user" })

const validateHash = async (hash: string, password: string) => {
  try {
    return bcrypt.compare(password, hash)
  } catch {
    throw createError({ statusCode: 403, statusMessage: "Error parsing hash" })
  }
}

export default eventHandler(async (event) => {
  const result = await readBody(event)
  const { username, password, type } = result

  // TODO: Insert user fetching algo and more

  let validhash = await validateHash("HASH", password)

  // if (!validhash) {
  //   throw UNATHORIZED_USER
  // }

  const expiresIn = 60 * 60 * 24
  const refreshToken = Math.floor(Math.random() * (1000000000000000 - 1 + 1)) + 1
  const user = {
    username,
    type
  }

  const accessToken = jwt.sign({ ...user, scope: ['user'] }, SECRET, { expiresIn })
  refreshTokens[refreshToken] = {
    accessToken,
    user
  }

  return {
    token: {
      accessToken,
      refreshToken
    }
  }
})
