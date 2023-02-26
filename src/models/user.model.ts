import { Response } from "express";
import { Model, Schema, model, Types } from "mongoose";
import bcrypt from "bcrypt";
import { DATABASES } from "../constants";

interface IUser {
  email: string;
  password: string;
  role: string;
}

interface ILoginProps {
  email: string;
  password: string;
  res: Response;
}

interface ILoginResponse extends IUser {
  _id: Types.ObjectId;
  updatedAt: Date;
  createdAt: Date;
}

interface UserModel extends Model<IUser> {
  login: (email: string, password: string, res: any) => Partial<ILoginResponse>;
}

const userSchema = new Schema<IUser, UserModel>(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      lowercase: true,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

// hash password before saving to database
userSchema.pre("save", async function (next) {
  const user = this;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    return next();
  } catch (err: any) {
    return next(err);
  }
});

userSchema.statics.login = async function (email, password, res) {
  try {
    const user = await this.findOne({ email });

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        return user;
      }

      throw Error("invalid email or password");
    }

    throw Error("invalid email or password");
  } catch (err: any) {
    res.status(401).json({ error: err.message });
  }
};

const User = model<IUser, UserModel>(DATABASES.USER, userSchema);

export default User;
