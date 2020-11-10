import app from "./app";
import http from "http";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const port = process.env.PORT || 5000;
const server = http.createServer(app);

const start = () => {
  try {
    mongoose
      .connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => {
        console.log("MongoDB connected.");
      });
    server.listen(port, (): void => {
      console.log(`Server is listening on port: ${port}.`);
    });
  } catch (error) {
    console.log(`Something went wrong: ${error.message}`);
    process.exit(1);
  }
};

start();