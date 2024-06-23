import CredentialProvider from 'next-auth/providers/credentials';
import NextAuth, { NextAuthConfig } from 'next-auth';
import prisma from '@/lib/neet.prisma';

const authConfig: NextAuthConfig = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user: any | null = await prisma.user.findFirst({
          where: { email, password }
        });
        if (!user) throw new Error('Invalid credentials');
        return user;
      }
    })
  ],
  pages : {
    signIn : '/signin'
  }
};

export default NextAuth(authConfig);
