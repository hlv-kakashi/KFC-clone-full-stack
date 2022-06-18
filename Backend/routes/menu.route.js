const { Router } = require("express");
const Menu = require("../model/menuSchema");
const menuRouter = Router();

menuRouter.get("/menu", async (req, res) => {
  let query = req.query;
  let items = await Menu.find(query);
  res.json(items);
});

menuRouter.get("/menu/:id", async (req, res) => {
  let { id } = req.params;
  let only = await Menu.find({ _id: id });
  return res.json(only);
});
module.exports = menuRouter;