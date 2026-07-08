require("dotenv").config();

const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
const cors = require("cors");

require("./passport");

const authRoute = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3000";

app.use(express.json());

app.use(
  cors({
    origin: CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.SESSION_SECRET || "passportjs-demo-secret"],
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: "lax",
    httpOnly: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoute);

app.get("/", (req, res) => {
  res.status(200).json({
    message: `hello from express server localhost port ${PORT}`
  });
});

app.listen(PORT, () => {
  console.log(`hello from express server localhost port ${PORT}`);
});
