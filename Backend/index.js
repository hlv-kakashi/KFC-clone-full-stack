const express = require("express");
require("dotenv").config({ path: "./.env" });
const connection = require("./Database/db");
const userAuthRouter = require("./routes/userAuth.route");
const paymentRouter = require("./routes/paymentIntegrate.route");
const menuRouter = require("./routes/menu.route");
const cartRouter = require("./routes/cart.route");
const searchRouter = require("./routes/serach.route");
const landingRouter = require("./routes/landing.route");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.send(`KFC API Server started on localhost:${PORT}`);
});

server.use("/Auth", userAuthRouter);
server.use("/api/home", landingRouter);
server.use("/api/searchapi", searchRouter);
server.use("/api/product", menuRouter);
server.use("/api/productcart", cartRouter);
server.use("/api/payment", paymentRouter);

const PORT = process.env.PORT || 8080;

server.listen(PORT, async () => {
  await connection;
  console.log("Connected to Database");
  console.log(`🌎 started on http://localhost:${PORT}/`);
});
