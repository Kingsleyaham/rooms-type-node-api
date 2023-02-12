const mongoose = require("mongoose");
const { Schema } = mongoose;
const { DATABASES } = require("../config/constants");

const roomTypeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const RoomTypes = mongoose.model(DATABASES.ROOMTYPE, roomTypeSchema);

module.exports = RoomTypes;
