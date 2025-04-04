const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();
const port = process.env.PORT || 10000;

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: ["https://redconnect-bloodlink-blood-donation-953a.onrender.com"],
    credentials: true,
  })
);

// MongoDB connection
mongoose.connect(
  process.env.CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (e) => {
    console.log(e ? e : "Connected successfully to database");
  }
);

// Routes
app.use("/auth", require("./routers/authRouter"));
app.use("/user", require("./routers/userRouter"));
app.use("/bank", require("./routers/bankRouter"));
app.use("/camps", require("./routers/campRouter"));

// Listen only once, bind to 0.0.0.0 for Render
app.listen(port, "0.0.0.0", () =>
  console.log(`Server running at http://0.0.0.0:${port}`)
);
