import jwt from 'jsonwebtoken'

const refreshTokens: Record<number, Record<string, any>> = {}
export const SECRET = 'This is a super strong and powerful secret'

export default eventHandler(async (event) => {
  const result = await readBody(event)

  // TODO: Insert user fetching algo and more

  const expiresIn = 15
  const refreshToken = Math.floor(Math.random() * (1000000000000000 - 1 + 1)) + 1
  const { username, password } = result
  const user = {
    username,
  }

  const accessToken = jwt.sign({ ...user, scope: ['test', 'user'] }, SECRET, { expiresIn })
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
