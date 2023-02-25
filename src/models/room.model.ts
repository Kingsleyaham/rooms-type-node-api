import { Schema, model } from "mongoose";
import { DATABASES } from "../constants";

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

const Room = model(DATABASES.ROOM, roomSchema);

export default Room;
