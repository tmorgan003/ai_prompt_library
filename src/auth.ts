import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/db";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GitHub],
  session: { strategy: "database" },
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;
      session.user.accessLevel = user.accessLevel;
      return session;
    },
  },
  events: {
    async signIn({ user }) {
      const adminEmail = process.env.ADMIN_EMAIL;
      if (adminEmail && user.email === adminEmail && user.accessLevel !== "ADMIN") {
        await prisma.user.update({
          where: { id: user.id },
          data: { accessLevel: "ADMIN" },
        });
      }
    },
  },
});
