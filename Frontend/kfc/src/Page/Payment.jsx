import React, { useState } from "react";
import axios from "axios";

const Payment = () => {
  const [book, setBook] = useState({
    name: "Lorem Ispsum",
    author: "Jhon Doe",
    price: 450,
  });

  const initPayment = (data) => {
    const options = {
      key: "",
      amount: data.amount,
      currency: data.currency,
      name: book.name,
      order_id: data.id
    };
  };

  const handlePayment = async () => {
    try {
      const orderURL = "http://localhost:8080/api/payment/orders";
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
        <h4>{book.price}</h4>
        <button onClick={handlePayment} className="buy_btn">
          Buy Now
        </button>
      </div>
      ;
    </div>
  );
};

export default Payment;
