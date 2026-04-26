import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";

const Funds = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3002/getHoldings", {
      withCredentials: true, // ✅ VERY IMPORTANT
    }).then((res) => {
      console.log(res.data);
      setAllHoldings(res.data);
    }).catch((err) => {
      console.error("Error fetching holdings:", err);
    }).finally(() => {
      setTimeout(() => {
        setLoading(false);
      }, 800);
    });
  }, []);

  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3002/me", {
      withCredentials: true,
    }).then((res) => {
      setUser(res.data);
    }).catch((err) => {
      console.error("Error fetching user data:", err);
    }).finally(() => {
      setTimeout(() => {
        setLoading(false);
      }, 800);
    });
  }, []);

  const totalInvestment = allHoldings.reduce(
    (acc, stock) => acc + stock.avg * stock.qty,
    0
  );

  const openingBalance = user?.balance || 0;
  const marginUsed = totalInvestment;
  const marginAvailable = Math.max(
    openingBalance - marginUsed,
  );
  const currentValue = allHoldings.reduce(
    (acc, stock) => acc + stock.price * stock.qty,
    0
  );
  const pnl = currentValue - totalInvestment;
  if (loading) {
    return (
      <Loader></Loader>
    );
  }
  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <Link className="btn btn-green">Add funds</Link>
        <Link className="btn btn-blue">Withdraw</Link>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">
                ₹{marginAvailable.toFixed(2)}
              </p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">₹{marginUsed.toFixed(2)}</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>₹{openingBalance.toFixed(2) || 0}</p>
            </div>
            <div className="data">
              <p>Current Investment</p>
              <p>₹{marginUsed.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Unrealized P&L</p>
              <p className={pnl >= 0 ? "profit" : "loss"}>
                ₹{pnl.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
