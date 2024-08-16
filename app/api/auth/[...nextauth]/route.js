import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {},
});

export { handler as GET, handler as POST };
// The above export is usually done separately, meaning you handle GET and POST requests individually. However, for Next.js Authentication, this combined approach is necessary.
/*
-[...nextauth] is the current naming convention in order to create a route.js file.
-In Next.js, each route functions as a serverless endpoint, similar to AWS Lambda functions. 
-These endpoints are invoked only when requested, establishing a connection to the database on demand. This approach eliminates the need for a continuously running server, optimizing resource usage.*/
