import jwt from 'jsonwebtoken'

const refreshTokens: Record<number, Record<string, any>> = {}
export const SECRET = 'This is a super strong and powerful secret'

export default eventHandler(async (event) => {
  const result = await readBody(event)
  const { username, password, type } = result

  // TODO: Insert user fetching algo and more

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
