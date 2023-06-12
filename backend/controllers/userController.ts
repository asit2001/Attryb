import { compare, genSalt, hash} from "bcryptjs";
import { Request, Response } from "express";
import { UserSchema } from "../type";
import userModel from "../model/userModel";
import { sign } from "jsonwebtoken";
export async function signup(req: Request, res: Response) {
  try {
    const data: Omit<UserSchema, "cars"> = {
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
    };
    const keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      if (!req.body[keys[i]]) {
        return res.status(400).json({ message: `${keys[i]} is required` });
      }
    }
    const salt = await genSalt(parseInt(process.env.HASH_ROUND));

    await userModel.create({
      ...data,
      password: await hash(data.password,salt),
    });
    res.status(201).json({ message: "user create successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;    
    if (!email || !password) {
      return res.status(400).json({ message: "email and password required" });
    }
    const user = await userModel.findOne({ email });
    console.log(user);
    
    if (!user || !(await compare(password, user.password))) {
      return res.status(404).json({ message: "email and password not found" });
    }
    const jwtToken = sign({id:user.id,name:user.name},process.env.JWT_SECRET);
    res.cookie("token",jwtToken,{
      httpOnly:true,
      sameSite:"strict",
      secure:true
    }).json({name:user.name});
  } catch (error) {
    res.status(500).json({message:error.message});
  }
}
export async function logOut(req:Request,res:Response){
    res.clearCookie("token").json({message:"successfully logout"});
}
