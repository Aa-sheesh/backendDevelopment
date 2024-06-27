import { app } from "./app.js";
import connectDb from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});
connectDb()
.then(()=>{
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is up and running at port:${process.env.PORT}`)
  }
)
})
.catch((err) => {
  console.log("Mongo DB connection failed!!!", err);
});

//iife function
//iife is a function that is immediately invoked after it is created
//Other approach
/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });
    app.listen(process.env.PORT, () => [
      conseole.log(`App is up and running at port: ${process.env.PORT}`),
    ]);
  } catch (error) {
    console.log("Error connecting to the database", error);
  }
})();
*/
