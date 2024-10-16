const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoute");
const homeRoute = require("./routes/staticRoute");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { checkForAuthentication, restrictTo } = require("./middlewares/auth");
const { connectToMongoDB } = require("./connect");

const app = express();

dotenv.config();
const PORT = process.env.PORT || 3333;
const URL = process.env.MONGO_URL;

connectToMongoDB(URL).then(() => console.log("MongoDB Connected"));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type, Authorization",
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(checkForAuthentication);

// app.use("/user", restrictTo(["NORMAL"]), userRoute);
app.use("/", homeRoute);
app.use("/user", userRoute);
app.listen(PORT, () => console.log(`Server Has started`));
