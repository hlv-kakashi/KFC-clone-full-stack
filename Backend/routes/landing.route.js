const { Router } = require("express");
const { favorites, featured, quickbites } = require("../model/LandingSchema");
const landingRouter = Router();

landingRouter.get("/favorites", async (req, res) => {
  const fav = await favorites.find();
  res.status(200).send(fav);
});

landingRouter.get("/featured", async (req, res) => {
  const feature = await featured.find();
  res.status(200).send(feature);
});

landingRouter.get("/quickbites", async (req, res) => {
  const quickbite = await quickbites.find();
  res.status(200).send(quickbite);
});
module.exports = landingRouter;
