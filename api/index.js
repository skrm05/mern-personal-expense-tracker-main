import express from "express";
import cors from "cors";
import { config } from "dotenv";
import dbConnect from "./db/dbConnect.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRouter.js";

config("./.env");

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/users", userRouter);

const PORT = 4000;
const LOCAL_HOST = "127.0.0.4";

app.listen(PORT, LOCAL_HOST, () => {
  console.log(`App is Listening on http://${LOCAL_HOST}:${PORT}`);
  dbConnect();
});
