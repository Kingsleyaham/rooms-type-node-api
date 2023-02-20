const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const bcrypt = require("bcrypt");
const { DATABASES } = require("../config/constants");

const userSchema = new Schema(
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
      enum: ["guest", "admin"],
      lowercase: true,
      default: "guest",
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
  } catch (err) {
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
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

const User = mongoose.model(DATABASES.USER, userSchema);

module.exports = User;
