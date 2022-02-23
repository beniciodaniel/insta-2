import NextAuth from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    token: JWT
    user: {
      email: string
      username: string
      image: string
      name: string
      uid: string | undefined
    }
  }
}
