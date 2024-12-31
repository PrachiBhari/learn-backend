import dotenv from "dotenv";
import connectDB from "./db/index";

dotenv.config({path: './env'})
connectDB()

// -r dotenv/config --experimental-json-modules