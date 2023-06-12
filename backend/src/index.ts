import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser";
import connectDB from "./connect";
import router from "../router";
import path from "path";
dotenv.config();

connectDB();
const app = express();
if (process.env.NODE_ENV==="development") {
    app.use(cors());
}
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"../public/")));
app.use("/api",router);


app.listen(process.env.PORT || 5000);
