import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:3002/getOrders").then((res) => {
  //     console.log(res.data);
  //     setOrders(res.data);
  //   });
  // }, []);
  useEffect(() => {
    axios.get("http://localhost:3002/getOrders", {
      withCredentials: true // ✅ VERY IMPORTANT
    })
      .then((res) => {
        console.log(res.data);
        setOrders(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                return (
                  <tr key={index}>
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>{order.price}</td>
                    <td className={order.status === "EXECUTED" ? "profit" : "loss"}>
                      {order.status}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
