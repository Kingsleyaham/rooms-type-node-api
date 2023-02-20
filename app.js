const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const constants = require("./config/constants");
const router = require("./routes/");
const { MESSAGES, DATABASE_URL } = require("./config/constants");

const app = express();

const port = process.env.PORT || 5000;
const host = process.env.HOST || "localhost";

mongoose.set("strictQuery", true);

// connect to db then start app
mongoose
  .connect(DATABASE_URL)
  .then(() =>
    app.listen(port, () => {
      console.log(`server running at http://${host}:${port}`);
    })
  )
  .catch((err) => console.log(err));

// third-party middleware
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(helmet());

// routes
app.get("/", (req, res) => {
  res.status(200).json({ message: MESSAGES.FETCHED, success: 1 });
});

app.use("/api/v1", router);

app.get("/*", (req, res) => {
  res.send("page not found");
});
