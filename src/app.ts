import { Request, Response } from "express";
import express from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "./docs";
import router from "./routes/";
import { MESSAGES, DATABASE_URL } from "./constants";

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
  .catch((err: any) => console.log(err));

// third-party middleware
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(helmet());

const swaggerOptions = {
  customCss: ".swagger-ui .topbar { display: none }",
};

// routes
app.use("/api/v1", router);
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDoc, swaggerOptions));

app.get("/*", (req: Request, res: Response) => {
  res.send("page not found");
});
