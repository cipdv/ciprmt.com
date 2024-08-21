// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import Credentials from "next-auth/providers/credentials";

// export const BASE_PATH = "/api/auth";

// const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     Credentials({
//       name: "Credentials",
//       credentials: {
//         email: {
//           label: "Email",
//           type: "text",
//           placeholder: "email address",
//         },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         let user = null;
//         console.log("credentials", credentials);

//         if (user) {
//           console.log("user found", user);
//           // Any object returned will be saved in `user` property of the JWT
//           return user;
//         } else {
//           // If you return null or false then the credentials will be rejected
//           return null;
//         }
//       },
//     }),
//   ],
//   basePath: BASE_PATH,
//   secret: process.env.NEXTAUTH_SECRET,

//   // callbacks: {
//   //   async session(session, user) {
//   //     // Add additional properties to the session object
//   //     session.user.userType = user.userType; // Assuming userType is a property of the user object
//   //     return session;
//   //   },
//   // },
//   // jwt: {
//   //   secret: process.env.JWT_SECRET_KEY,
//   // },
// };

// export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
