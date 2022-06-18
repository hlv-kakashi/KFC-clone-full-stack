const { Router } = require("express");
const Cart = require("../model/cartSchema");
const cartRouter = Router();

cartRouter.post("/cart", async (req, res) => {
  await Cart.insertMany(req.body);
  return res.status(201).send("cart added");
});

cartRouter.get("/cart", async (req, res) => {
  let cart = await Cart.find();
  return res.json(cart);
});

cartRouter.delete("/cart/:id", async (req, res) => {
  await Cart.deleteOne(req.params);
  res.send("delete successful");
});

cartRouter.put("/cart/:id", async (req, res) => {
  if (req.body.qty === 0) {
    await Cart.deleteOne(req.params);
    return res.send("cart is empty");
  }
  await Cart.updateOne(req.params, { $set: req.body });
  let cart = await Cart.find(req.params);
  return res.json(cart);
});
module.exports = cartRouter;
