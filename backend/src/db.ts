import mongoose, { Schema, model } from "mongoose";
import "dotenv/config";

if (!process.env.MONGO_URL) {
  throw new Error("MONGO_URL env variable is missing");
}

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

export const UserModel = model("User", userSchema);
