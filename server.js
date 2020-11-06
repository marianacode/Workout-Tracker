const mongoose = require("mongoose");
var path = require('path');
const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

const exercise = require("./models/exercises.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("database connected");
});

require("./routes/api-routes")(app);
require("./routes/html-routes")(app); 



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});