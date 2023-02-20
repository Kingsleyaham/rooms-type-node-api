const mongoose = require("mongoose");
const { Schema } = mongoose;
const { DATABASES } = require("../config/constants");

const roomSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Room name is required"],
      lowercase: true,
      unique: true,
      trim: true,
    },
    roomType: {
      type: Schema.Types.ObjectId,
      ref: "RoomType",
      required: [true, "Room type is required"],
    },

    price: { type: Number, required: [true, "Price is required"] },
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.model(DATABASES.ROOM, roomSchema);

module.exports = Room;
