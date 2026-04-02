import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3002/getOrders").then((res) => {
      // console.log(res.data);
      setOrders(res.data);
    });
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
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
          </tr>

          {orders.map((order, index) => {
              return (<tr key={index}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
              </tr>)
          })}
        </table>
      </div>
      )}    
    </div>
  );
};

export default Orders;
