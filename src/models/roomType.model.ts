import { Schema, model } from "mongoose";
import { DATABASES } from "../constants";

const roomTypeSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "roomtype name is required"],
      lowercase: true,
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const RoomType = model(DATABASES.ROOMTYPE, roomTypeSchema);

export default RoomType;
