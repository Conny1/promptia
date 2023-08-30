import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handlers = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
  ],
  async session({ session }) {},

  async signIn({ profile }) {},
});

export { handlers as Get, handlers as POST };
