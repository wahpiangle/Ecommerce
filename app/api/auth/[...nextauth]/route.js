import bcrypt from 'bcryptjs';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@/app/libs/prismadb'

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        CredentialsProvider({
            name: 'credentials',
            credentials:{
                email: {label: "Email", type: "email"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials){
                if(!credentials?.email || !credentials?.password){
                    throw new Error('Invalid Credentials')
                }
                const user = await prisma.user.findUnique({
                    where: {email: credentials.email}
                })

                //this check prevents provider users to signup using form
                if(!user || !user?.hashedPassword){
                    throw new Error('Invalid Credentials');
                }

                const isCorrectPassword = await bcrypt.compare(
                    credentials.password, user.hashedPassword
                )

                if(!isCorrectPassword){
                    throw new Error('Invalid Credentials');
                }

                return user;
            }
        })
    ],
    session:{
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST};