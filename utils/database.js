import mongoose from "mongoose";

let isConnected = false; //Tracks connection status

export const connectToDB = async () => {
  mongoose.set("strictQuery", true); // Sets mongoose options

  if (isConnected) {
    console.log("MongoDB is already connected!");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;

    console.log("MongoDB is connected!");
  } catch (err) {
    console.log(err);
  }
};

// Note: If you don't set "mongoose.set" you'll get warnings in the console.
// Replace <password> from MongoDB's "connection string" with the password of the MONGODB user.
