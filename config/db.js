import dns from "node:dns";
import mongoose from "mongoose";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

export const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  console.log("MongoDB connected");
};
