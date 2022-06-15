const { Router } = require("express");
const userDetails = require("../model/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userAuthRouter = Router();

userAuthRouter.post("/signup", async (req, res) => {
  console.log(req.body);
  try {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    await userDetails.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: newPassword,
    });
    res.json({ status: "OK" });
  } catch (err) {
    console.log(err);
    res.json({ status: "ERROR", error: "Duplicate Email" });
  }
});

userAuthRouter.post("/login", async (req, res) => {
  const user = await userDetails.findOne({
    email: req.body.email,
    // password: req.body.password,
  });
  if (!user) {
    return { status: "Error", error: "Invalid User" };
  }
  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (isPasswordValid) {
    const token = jwt.sign(
      {
        firstname: userDetails.firstname,
        lastname: userDetails.lastname,
        email: userDetails.email,
      },
      "secret@$%#02112022"
    );
    return res.json({ status: "OK", user: token });
  } else {
    return res.json({ status: "ERROR", user: false });
  }
});

module.exports = userAuthRouter;
