import dotenv from "dotenv";
dotenv.config()
import express from "express";
import expressLayouts from "express-ejs-layouts";
import session from "express-session";
import cors from "cors";
import { authenticateAdmin } from "./middleware/auth.js";


import dbConnect from "./config/db.js";


import productRouter from "./routes/productRoute.js";

import { storeRouter } from "./routes/storeRoute.js";
import homeRouter from "./routes/homeRoute.js";
import authRouter from "./routes/authRoute.js";
import userRouter from "./routes/userRoute.js";

const app = express();

app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", "views");
app.set("layout","layout");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
  session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: false,
  }),
);

app.use("/", storeRouter);
// app.use("/auth", authRouter);
app.use("/products", productRouter);
// app.use("/users", userRouter);

const startServer = async () => {
  await dbConnect();
  app.listen(5000,()=>{
    console.log("Server Started");
  });
};
startServer()

