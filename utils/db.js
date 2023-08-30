import mongoose from "mongoose";

const isConnected = false;

export const connectToDB = () => {
  mongoose.set("strict query", true);

  if (isConnected) {
    console.log("MongoDb is already connected");
    return;
  }
  try {
    mongoose.connect(process.env.MONGO_URL, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
  }
};
