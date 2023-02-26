import userDoc from "./userRoute.doc";
import authDoc from "./authRoute.doc";
import roomDoc from "./roomRoute.doc";
import roomTypeDoc from "./roomTypeRoute.doc";

const swaggerDoc = {
  openapi: "3.0.0",
  info: {
    title: "Node js Api",
    version: "1.0.0",
    contact: {
      name: "Aham Kingsley",
      email: "kingsleyaham6@gmail.com",
    },
    description: "A Node Js Api for a hotel management system",
  },
  servers: [
    { url: "http://localhost:5000/api/v1", description: "Local server" },
    { url: "http://localhost:5000/api/v1", description: "Prod server" },
  ],
  tags: [
    { name: "auth", description: "auth api endpoint" },
    { name: "users", description: "users api endpoint" },
    { name: "rooms", description: "rooms api endpoint" },
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