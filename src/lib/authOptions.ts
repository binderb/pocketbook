
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from 'bcrypt';
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 8 // 8 hours
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {label: "Username", type: "username"},
        password: {label: "Password", type: "password"}
      },
      async authorize(credentials:any): Promise<any> {
        const matchingUsers = await db.select().from(users).where(eq(users.username,credentials.username));
        if (matchingUsers.length !== 1) {
          throw new Error('Incorrect username/password.');
        }
        const user = matchingUsers[0];
        const pwValid = await bcrypt.compare(credentials.password, user.password);
        if (!pwValid) {
          throw new Error('Incorrect username/password.')
        }
        return user;
      }
    })
  ],
  // secret: process.env.JWT_SECRET,
  callbacks: {
    async jwt({token, user}) {
      if (user) {
        token.user = user;
        console.log(token);
      }
      return token;
    },
    async session ({session, token}) {
      session.user = {
        id: token.user.id,
        username: token.user.username,
        first: token.user.first,
        last: token.user.last,
      };
      return session;
    }
  },
  pages: {
     signIn: '/login'
  }
};