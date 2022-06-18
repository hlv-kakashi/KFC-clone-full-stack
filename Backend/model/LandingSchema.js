const { Schema, model } = require("mongoose");

const favoritesSchema = new Schema({
  image: { type: String },
  title: { type: String },
  desc: { type: String },
  price: { type: String },
  type: { type: String },
});
const featuredSchema = new Schema({
  image: { type: String },
  title: { type: String },
  desc: { type: String },
  price: { type: String },
  type: { type: String },
});
const quickbitesSchema = new Schema({
  image: { type: String },
  title: { type: String },
  desc: { type: String },
  price: { type: String },
  type: { type: String },
});
const favorites = model("favorite", favoritesSchema);
const featured = model("featured", featuredSchema);
const quickbites = model("quickbite", quickbitesSchema);
module.exports = { favorites, featured, quickbites };
