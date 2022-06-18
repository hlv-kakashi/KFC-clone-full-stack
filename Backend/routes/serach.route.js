const { Router } = require("express");
const Menu = require("../model/menuSchema");
const searchRouter = Router();

searchRouter.get("/item", async (req, res) => {
  let query = req.query;

  let items = await Menu.find({
    title: { $regex: req.query.search, $options: /i/ },
  });
  res.json(items);
});
module.exports = searchRouter;
