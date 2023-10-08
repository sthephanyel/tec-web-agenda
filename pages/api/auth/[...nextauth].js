import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

// Esse problema acontece porque muitas plataformas como nextjs (e provavelmente nestjs também) 
// fazem o hot reload de partes do seu código. Normalmente, você inicializa o PrismaClient uma vez em 
// seu aplicativo (como um singleton). Mas o hot reload resulta em várias inicializações deste PrismaClient

let prisma

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }

  prisma = global.prisma
}

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    secret: process.env.AUTH_SECRET,
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
  }
export default NextAuth(authOptions);