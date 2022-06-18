const mongoose = require("mongoose");
const db = process.env.DATABASE;
const connection = mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
module.exports = connection;