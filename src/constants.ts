import * as dotenv from "dotenv";
dotenv.config();

export const DATABASE_URL: string = process.env.DATABASE_URI!;

export const ACCESS_SECRET_TOKEN: string = process.env.ACCESS_TOKEN_SECRET!;

export const DATABASES = {
  ROOM: "room",
  ROOMTYPE: "room_type",
  USER: "user",
};

export const MESSAGES = {
  FETCHED: "Resource fetched Successfully",
  UPDATED: "Resource updated Successfully",
  ERROR: "An error occured",
  CREATED: "Resource created Successfully",
  DELETED: "Resource deleted Successfully",
  LOGOUT: "Logout successful",
};
