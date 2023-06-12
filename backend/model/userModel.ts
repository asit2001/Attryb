import { Schema, model } from "mongoose";
import { UserSchema } from "../type";
const userSchema = new Schema<UserSchema>({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  cars: [{ type: Schema.Types.ObjectId, ref: "marketplace_inventory", unique: true }]
  
});
const userModel = model("user",userSchema);
export default userModel;