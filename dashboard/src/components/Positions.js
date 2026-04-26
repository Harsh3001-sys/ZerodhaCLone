import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:3002/getPositions", {
      withCredentials: true, // ✅ VERY IMPORTANT
    }).then((res) => {
      setAllPositions(res.data);
    }).catch((err) => {
      console.error("Error fetching positions:", err);
    }).finally(() => {
      setTimeout(() => {
        setLoading(false);
      }, 800);
    });
  });
  if (loading) {
    return (
      <Loader></Loader>
    );
  }
  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>

          {allPositions.map((stock) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
                <tr key={stock._id}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              
            );
          })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
