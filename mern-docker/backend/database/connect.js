 
// create a connection to our MongoDB database
const mongoose = require("mongoose");

function connect() {
  if(!process.env.DB_URL) {
    console.log("DB_URL not found. Exiting now...");
    process.exit(1);
  }
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((err) => {
      console.log("database connection failed. exiting now...");
      console.error(err);
      process.exit(1);
    });
}

module.exports = connect;