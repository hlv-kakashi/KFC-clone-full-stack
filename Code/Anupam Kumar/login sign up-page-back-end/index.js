import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect(
  "mongodb+srv://hlv-kakashi:Anupam123@cluster0.tjkwwu3.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected");
  }
);

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  rePassword: String,
});
const User = new mongoose.model("User", userSchema);
// Routes

app.post("/register", (req, res) => {
  const { first_name, last_name, email, password, rePassword } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registered " });
    } else {
      const user = new User({
        first_name,
        last_name,
        email,
        password,
        rePassword,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered, Please Login Now." });
        }
      });
    }
  });
});
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successful", user: user });
      } else {
        res.send({ message: "Password is wrong" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
});
app.listen(9002, () => {
  console.log("db started at port 9002");
});
