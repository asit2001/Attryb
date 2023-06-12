import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export async function auth(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(403).json({ message: "token not found" });
    }
    if (!verify(token, process.env.JWT_SECRET)) {
      return res.status(403).json({ message: "invalid token" });
    }
    next();
  } catch (e) {
    return res.status(403).json({ message: "invalid token" });
  }
}
