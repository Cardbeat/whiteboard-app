const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/drewdat", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on("error", (error) => {
  console.log("there is a problem with db connection");
});

db.once("open", () => {
  console.log("db connected at localhost:drewdat");
});
