import type { AccessLevel } from "@prisma/client";
import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      accessLevel: AccessLevel;
    } & DefaultSession["user"];
  }
}

declare module "@auth/core/adapters" {
  interface AdapterUser {
    accessLevel: AccessLevel;
  }
}

declare module "@auth/core/types" {
  interface User {
    accessLevel?: AccessLevel;
  }
}
