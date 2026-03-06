import express from "express";
import expressLayouts from "express-ejs-layouts";
import session from "express-session";
import {productRouter} from "./routes/productRoute.js";
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
  session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: false,
  }),
);

app.get("/", (req, res) => {
  res.render("home");
});
app.use("/products", productRouter);

app.listen(5000, () => {
  console.log("Server Started");
});
