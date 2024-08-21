import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import dbConnection from "@/app/lib/database/dbconnection";
import { ObjectId } from "mongodb";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "@/app/lib/database/db";
import authConfig from "@/auth.config";

export const BASE_PATH = "/api/auth";

const authOptions = {
  adapter: MongoDBAdapter(client, {
    databaseName: "myFirstDatabase",
  }),
  session: { strategy: "jwt" },
  ...authConfig,

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "email address",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        let user = null;
        console.log("credentials", credentials);
        // const dbClient = await dbConnection();
        // const db = await dbClient.db(process.env.DB_NAME);
        user = await authOptions.adapter.getUserByEmail(credentials.email);

        if (user) {
          console.log("user found", user);
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null or false then the credentials will be rejected
          return null;
        }
      },
    }),
  ],
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      // Add user properties to the token
      if (user) {
        token.userType = user.userType; // Assuming userType is a property of the user object
      }
      return token;
    },
    async session({ session, token }) {
      // Add token properties to the session
      session.user.userType = token.userType;
      return session;
    },
  },

  // callbacks: {
  //   async session(session, user) {
  //     // Add additional properties to the session object
  //     session.user.userType = user.userType; // Assuming userType is a property of the user object
  //     return session;
  //   },
  // },
  // jwt: {
  //   secret: process.env.JWT_SECRET_KEY,
  // },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
