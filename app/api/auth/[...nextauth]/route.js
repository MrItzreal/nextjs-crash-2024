import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@models/user";
import { connectToDB } from "@utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();
      return session;

      //1-Gets current user
      //2-Updates current user ID
      //3-Identifies which user is logged in
    },

    async signIn({ profile }) {
      try {
        await connectToDB();

        //Checks if "user" already exists:
        const userExists = await User.findOne({ email: profile.email });

        //If "user" does not exist, creates new one
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
/*
The above export is usually done separately, meaning you handle GET and POST requests individually. However, for Next.js Authentication, this combined approach is necessary.

NOTES:
-[...nextauth] is the current naming convention in order to create a route.js file.
-In Next.js, each route functions as a serverless endpoint, similar to AWS Lambda functions. 
-These endpoints are invoked only when requested, establishing a connection to the database on demand. This approach eliminates the need for a continuously running server, optimizing resource usage.
*/
