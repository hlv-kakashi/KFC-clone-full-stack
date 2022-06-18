import React, { useState } from "react";
import axios from "axios";

const Payment = () => {
  let str = "$350";
  let final = parseInt(str.split("$")[1]);

  const [book, setBook] = useState({
    name: "Lorem Ispsum",
    author: "Jhon Doe",
    price: final,
  });

  const initPayment = (data) => {
    const options = {
      key: "",
      amount: data.amount,
      currency: data.currency,
      name: book.name,
      description: "Test Transaction",
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyURL = "https://kfcapi.herokuapp.com/api/payment/verify";
          const { data } = await axios.post(verifyURL, response);
          console.log("data:", data);
        } catch (err) {
          console.log("err:", err);
        }
      },
      theme: {
        color: "#242873",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      const orderURL = "https://kfcapi.herokuapp.com/api/payment/orders";
      const { data } = await axios.post(orderURL, { amount: book.price });
      console.log("data:", data);
      initPayment(data.data);
    } catch (err) {
      console.log("err:", err);
    }
  };
  return (
    <div>
      <div className="book_container">
        <h1>{book.name}</h1>
        <h3>{book.author}</h3>
        <h4>$ {book.price}</h4>
        <button onClick={handlePayment} className="buy_btn">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Payment;




