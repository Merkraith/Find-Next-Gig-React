const express = require("express");
const mongoose = require("mongoose");

const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();

<<<<<<< HEAD
=======
const db = require("./models/index.js");

>>>>>>> mongodb
// Middleware
const methodOverride = require("method-override");
const session = require("express-session");

app.use(express.json()); // Used to parse JSON bodies.
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies.

// Serve up static assets (usually on heroku).
app.use(express.static("client/build"));

// Routes.
<<<<<<< HEAD
const userRouter = require("./routes/users.js");
app.use("/users", userRouter);
=======
// const userRouter = require("./routes/users.js");
// app.use("/users", userRouter);
>>>>>>> mongodb

// Server connection.
app.listen(PORT, () => {
  console.log(`🌎 ==> Server is now listening on port ${PORT}!`);
});
