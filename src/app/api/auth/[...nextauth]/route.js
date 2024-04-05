import clientPromise from "@/libs/mongoConnect"
import bcrypt from "bcrypt";
import * as mongoose from "mongoose";
import {User} from '../../../../models/User'
import { UserInfo } from '../../../../models/UserInfo'
import NextAuth, {getServerSession} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";

export const authOptions = {
  secret: "asdflakisdflkjasdlkfias",
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: "436111477292-objbbnon4mnl5581rl4vjih17r5q26os.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    CredentialsProvider({          
      name: "Credentials",
      id: 'credentials',          
      credentials: {
        username: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" },
      },
      
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;

        mongoose.connect("mongodb+srv://subham:KfR0jVvk9bwPE8vY@cluster0.vznbg6c.mongodb.net/food-ordering");
        const user = await User.findOne({email});            
        const passwordOk = user && bcrypt.compareSync(password, user.password);

        if(passwordOk){
          return user;
        }      
        return null;
      
            
      }  
    })
    
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },   
};




export async function isAdmin() {

  
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  if (!userEmail) {
    return false;
  }
  const userInfo = await UserInfo.findOne({ email: userEmail });
  if (!userInfo) {
    return false;
  }
  return userInfo.admin;
  
}



const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }