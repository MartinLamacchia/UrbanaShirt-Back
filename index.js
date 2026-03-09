dotenv = require("dotenv").config();
const server = require("./src/app");
const mongoose = require("mongoose");
const port = process.env.PORT;
const mongoDB = process.env.MONGO_DB;

mongoose
  .connect(mongoDB)
  .then(() => {
    console.log("Connected to MongoDB");

    server.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });
