const dotenv = require("dotenv").config();
const constants = {
  // DATABASE_URL: process.env.DATABASE_URI,
  DATABASE_URL: process.env.DATABASE_URI,
  DATABASES: {
    ROOM: "room",
    ROOMTYPE: "room_type",
  },
  MESSAGES: {
    FETCHED: "Resource fetched Successfully",
    UPDATED: "Resource updated Successfully",
    ERROR: "An error occured",
    CREATED: "Resource created Successfully",
    DELETED: "Resource deleted Successfully",
  },
};

module.exports = constants;
