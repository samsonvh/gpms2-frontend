import NextAuth, { User } from "next-auth";
import credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user: User = {};

        let data = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/v1/auth/sign-in`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        }).then((response) => response.json());

        user.id = data.accessToken;
        user.name = data.account.fullName;
        user.email = data.account.email;
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt({token, user}) {
      if(user){
        token.id = user.id;
      }
      return token;
    },
    session({session, token}){
      session.user.id = token.id as string;
      return session;
    }
  }
});
