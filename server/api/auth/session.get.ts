import { SECRET } from "./login.post"
import jwt from 'jsonwebtoken'

const TOKEN_TYPE = 'Bearer'

const extractToken = (authHeaderValue: string) => {
  const [, token] = authHeaderValue.split(`${TOKEN_TYPE} `)
  return token
}

const extractTokenV2 = (authHeader: string) => {
  const [, token] = authHeader.split("=")
  return token
}
interface Session {
  username: string,
  type: string,
  scope: string[],
  iat: number,
  exp: number
}
export const ensureAuth = (event): Session => {
  const authHeaderValue = getRequestHeader(event, 'authorization')
  const authHeaderValueCookie = getRequestHeader(event, 'cookie')
  if (typeof authHeaderValue === 'undefined' && typeof authHeaderValueCookie === 'undefined') {
    throw createError({ statusCode: 403, statusMessage: 'Need to pass valid Bearer-authorization header to access this endpoint' })
  }

  if (typeof authHeaderValueCookie === 'undefined') {
    throw createError({ statusCode: 403, statusMessage: 'Need to pass valid Bearer-authorization header to access this endpoint' })
  }

  const extractedToken = authHeaderValue ? extractToken(authHeaderValue) : extractTokenV2(authHeaderValueCookie)
  try {
    // @ts-ignore
    return jwt.verify(extractedToken, SECRET)
  } catch (error) {
    console.log(error)
    throw createError({ statusCode: 403, statusMessage: 'You must be logged in to use this endpoint' })
  }
}

export default eventHandler(async (event) => {
  const user = ensureAuth(event)
  return user
})
