import express from "express";
import cors from "cors";
import { config } from "dotenv";
import dbConnect from "./db/dbConnect.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRouter.js";
import { notFound } from "./middlewares/notFound.js";

async function mainEntryFunction() {
  config("./.env");
  const app = express();
  const allowedOrigins = process.env.CORS_ORIGINS.split(",").filter(Boolean);

  app.use(
    cors({
      credentials: true,
      origin: allowedOrigins,
    }),
  );

  app.use(express.json());
  app.use(cookieParser());

  app.use("/users", userRouter);

  app.use(notFound);

  const PORT = Number(process.env.PORT);
  app.listen(PORT, () => {
    console.log(`App is Listening on ${PORT}`);
    dbConnect();
  });
}

mainEntryFunction().catch((err) => {
  console.error("Failed to start the app:", err);
  process.exit(1);
});
