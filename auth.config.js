import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

const authConfig = {
  providers: [Google, Credentials],
};

export default authConfig;
