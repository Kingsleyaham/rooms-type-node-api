import userDoc from "./userRoute.doc";
import authDoc from "./authRoute.doc";
import roomDoc from "./roomRoute.doc";
import roomTypeDoc from "./roomTypeRoute.doc";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;

const swaggerDoc = {
  openapi: "3.0.0",
  info: {
    title: "Node js Api",
    version: "1.0.0",
    contact: {
      email: "kingsleyaham6@gmail.com",
    },
    description: `A Hotel Management System Api Built Using Nodejs, Typescript and ExpressJs, MongoDb for validation, Joi for validation and Jwt for authtication and authorisation. Note some routes needs authorisation and authentication before you can access them. [Github Repo](https://github.com/Kingsleyaham/rooms-type-node-api). Feel free using and testing our api. Your feedback  and corrections is highly needed  
    
    Please Select the right server from the servers dropdown.`,
  },
  servers: [
    {
      url: `http://localhost:${port}/api/v1`,
      description: "Local server",
    },
    {
      url: "https://kingsley-hotel-api.onrender.com/api/v1",
      description: "Prod server",
    },
  ],
  tags: [
    { name: "auth", description: "auth api endpoint" },
    {
      name: "users",
      description: "users api endpoint. Only an admin can access this route",
    },
    {
      name: "rooms",
      description:
        "rooms api endpoint. You have to be authenticated. ie logged in to access this route",
    },
    {
      name: "rooms-types",
      description:
        "rooms-types api endpoint. Only an admin can access this route",
    },
  ],
  paths: {
    "/auth/register": authDoc.register,
    "/auth/login": authDoc.login,
    "/auth/logout": authDoc.logout,
    "/users": userDoc.fetchAll,
    "/users/{id}": userDoc.fetchOne,
    "/rooms": roomDoc.baseUrl,
    "/rooms/{id}": roomDoc.reqByID,
    "/rooms-types": roomTypeDoc.baseUrl,
    "/rooms-types/{id}": roomTypeDoc.reqByID,
  },
};

export default swaggerDoc;
