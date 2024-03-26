import { isAdmin } from "../auth/[...nextauth]/route";
import { User } from "../../../models/User";
import mongoose from "mongoose";

export async function GET() {
  mongoose.connect("mongodb+srv://subham:KfR0jVvk9bwPE8vY@cluster0.vznbg6c.mongodb.net/food-ordering");  
  if (await isAdmin()) {
    const users = await User.find();
    return Response.json(users);
  } else {
    return Response.json([]);
  }
}