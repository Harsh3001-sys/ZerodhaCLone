import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const Summary = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/getHoldings", {
      withCredentials: true, // ✅ VERY IMPORTANT
    }).then((res) => {
      console.log(res.data);
      setAllHoldings(res.data);
    });
  }, []);

  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3002/me", {
      withCredentials: true,
    }).then((res) => {
      setUser(res.data);
    });
  }, []);

  const totalInvestment = allHoldings.reduce(
    (acc, stock) => acc + stock.avg * stock.qty,
    0
  );

  const currentValue = allHoldings.reduce(
    (acc, stock) => acc + stock.price * stock.qty,
    0
  );

  const pnl = currentValue - totalInvestment;

  const pnlPercent =
    totalInvestment > 0 ? ((pnl / totalInvestment) * 100).toFixed(2) : 0;

  const openingBalance = 50000.0;
  const marginUsed = totalInvestment;
  const marginAvailable = openingBalance - marginUsed;
  return (
    <>
      <div className="username">
        <h6>Hi, {user?.username || "User"}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>{marginAvailable.toFixed(2)}</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>{marginUsed.toFixed(2)}</span>{" "}
            </p>
            <p>
              Opening balance <span>{openingBalance.toFixed(2)}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({allHoldings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={pnl >= 0 ? "profit" : "loss"}>
              {pnl.toFixed(2)} <small>{pnlPercent}%</small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{currentValue.toFixed(2)}</span>
            </p>
            <p>
              Investment <span>{totalInvestment.toFixed(2)}</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
