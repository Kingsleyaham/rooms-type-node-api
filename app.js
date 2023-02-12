const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const constants = require("./config/constants");
const roomRoute = require("./routes/rooms");
const roomTypeRoute = require("./routes/roomTypes");
const { MESSAGES, DATABASE_URL } = require("./config/constants");

const app = express();

const port = process.env.PORT || 5000;
const host = process.env.HOST || "localhost";

mongoose.set("strictQuery", true);

try {
  mongoose
    .connect(DATABASE_URL)
    .then((result) =>
      app.listen(port, () => {
        console.log(`server running at http://${host}:${port}`);
      })
    )
    .catch((err) => console.log(err));
} catch (error) {
  console.log(error);
}

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());

// routes
app.get("/", (req, res) => {
  res.status(200).json({ message: MESSAGES.FETCHED, success: 1 });
});
app.use("/api/v1", roomRoute);
app.use("/api/v1", roomTypeRoute);
app.get("/*", (req, res) => {
  res.send("page not found");
});
