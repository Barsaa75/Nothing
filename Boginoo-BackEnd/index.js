import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./router/link.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const corsOption = {
  origin: "http://localhost:3000",
  optionSuccesStatus: 200,
};

app.use(cors(corsOption));
app.use(express.json());

app.use("/links", router);

const uri = process.env.MONGO_ATLAS_URI || "";
const port = process.env.PORT || 8888;

const connect = () => {
  try {
    mongoose.connect(uri, {}).then(() => {
      console.log("connected to DB");
    });
  } catch (error) {
    console.error("Could not connect to DB");
    process.exit(1);
  }
};

app.listen(port, async () => {
  connect();
  console.log(`app running ${port}`);
});
