import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/db/prisma"
import CredentialsProvider from 'next-auth/providers/credentials' 
import { compareSync } from "bcrypt-ts-edge"
import type { NextAuthConfig } from "next-auth"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: 'email'},
        password: { type: 'password'},
      },
      async authorize(credentials) {
        if(credentials == null) return null;
        // Find user in database
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email as string
          },
        });
        // Check if it exists
        if (user && user.password) {
          const isMatch = compareSync(credentials.password as string, user.password)
          if (isMatch) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role,
            };
          }
        }
        return null;
     }
    })
  ],
  callbacks: {
    async session({ session, user, trigger, token }: any) {
      // Set user ID
      session.user.id = token.sub;
      session.user.role = token.role;
      session.user.name = token.name;

      

      // If there's an udate, set the user name
      if (trigger === 'update') {
        session.user.name = user.name;
      }

      return session;
    },
    async jwt({ token, user, trigger, session }: any) {
      if(user) {
        token.role = user.role;

        if (user.name === 'NO_NAME')
          token.name = user.name!.split('@')[0];
          
          await prisma.user.update({
            where: {id: user.id },
            data: { name: token.name },
          })
      }
      return token;
    }
  },
  pages: {
    signIn: '/sign-in',
    error: '/sign-in',
    signOut: '/sign-out',
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,   
  },
  } satisfies NextAuthConfig
)