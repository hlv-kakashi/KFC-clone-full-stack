const { Router } = require("express");
const razorpay = require("razorpay");
const crypto = require("crypto");

const paymentRouter = Router();

// Create Orders
paymentRouter.post("/orders", async (req, res) => {
  try {
    const instance = new razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"),
    };

    instance.orders.create(options, (error, order) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong!" });
      }
      res.status(200).json({ data: order });
    });
  } catch (err) {
    console.log("err:", err);
    res.status(500).json({ message: "Inernal Server Error!" });
  }
});

// Payment Verifying
paymentRouter.post("/verify", async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      return res.status(200).json({ message: "Payment Varified Successfully" });
    } else {
      return res.status(400).json({ message: "Invalid Signature send!" });
    }
  } catch (err) {
    console.log("err:", err);
    res.status(500).json({ message: "Inernal Server Error!" });
  }
});
module.exports = paymentRouter;
