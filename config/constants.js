const dotenv = require("dotenv").config();

const constants = {
  DATABASE_URL: process.env.DATABASE_URI,
  ACCESS_SECRET_TOKEN: process.env.ACCESS_TOKEN_SECRET,

  DATABASES: {
    ROOM: "room",
    ROOMTYPE: "room_type",
    USER: "user",
  },

  MESSAGES: {
    FETCHED: "Resource fetched Successfully",
    UPDATED: "Resource updated Successfully",
    ERROR: "An error occured",
    CREATED: "Resource created Successfully",
    DELETED: "Resource deleted Successfully",
    LOGOUT: "Logout successful",
  },
};

module.exports = constants;
