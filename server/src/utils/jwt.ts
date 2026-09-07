import jwt from 'jsonwebtoken'

interface TokenPayload {
  userId: string
  email: string
}

export const generateToken = (payload: TokenPayload): string => {
  const JWT_SECRET = process.env.JWT_SECRET
  const JWT_EXPIRE = process.env.JWT_EXPIRE || '7d'

  if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined in environment variables')
  }

  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRE
  })
}

export const verifyToken = (token: string): TokenPayload => {
  const JWT_SECRET = process.env.JWT_SECRET

  if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined in environment variables')
  }

  return jwt.verify(token, JWT_SECRET) as TokenPayload
}
