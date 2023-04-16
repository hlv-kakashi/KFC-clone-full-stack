const { Router } = require("express");
const userDetails = require("../model/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userAuthRouter = Router();

// SIGNUP
userAuthRouter.post("/signup", async (req, res) => {
  try {
    const existingUser = await userDetails.findOne({
      email: req.body.email,
    });
    if(existingUser){
      res.json({message:"Email already exists"});
    }
    const newPassword = await bcrypt.hash(req.body.password, 10);
    await userDetails.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: newPassword,
      token: "",
    });
    res.json({ status: "OK" });
  } catch (err) {
    console.log(err);
    res.json({ status: "ERROR", error: "Duplicate Email" });
  }
});

// LOGIN
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
      process.env.SECRET_KEY
    );
    await userDetails.findOneAndUpdate(
      { email: req.body.email },
      { token: token }
    );
    return res.json({ status: "OK", user: token });
  } else {
    return res.json({ status: "ERROR", user: false });
  }
});

// LOGOUT
userAuthRouter.post("/logout", async (req, res) => {
  try {
    const { token } = req.headers;
    const user = await userDetails.findOne({ token: token });
    console.log('user:', user)
    if (user) {
      user.token = "";
      await user.save();
      res.status(200).json({ message: "logout successfully" });
    } else {
      res.status(400).json({ error: "invalid token" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = userAuthRouter;
