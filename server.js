const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();

const db = require("./models/index.js");

// Middleware
const methodOverride = require("method-override");
const session = require("express-session");
app.use(express.json()); // Used to parse JSON bodies.
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies.

// Serve up static assets (usually on heroku).
app.use(express.static("client/build"));

<<<<<<< Updated upstream
=======
// Routes.
// const userRouter = require("./routes/users.js");
// app.use("/users", userRouter);

>>>>>>> Stashed changes
// Server connection.
app.listen(PORT, () => {
  console.log(`🌎 ==> Server is now listening on port ${PORT}!`);
});
