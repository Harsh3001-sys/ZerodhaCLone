import React from "react";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import axios from "axios";

const TopBar = () => {
  const [indices, setIndices] = useState({
    nifty: {
      price: "--",
      change: 0,
      isDown: false
    },
    sensex: {
      price: "--",
      change: 0,
      isDown: false
    }
  });

  useEffect(() => {

    const fetchIndices = () => {
      axios.get(
        "http://localhost:3002/live-prices",
        { withCredentials: true }
      )
        .then(res => {
          const nifty = res.data.find(q => q.symbol === "^NSEI");
          const sensex = res.data.find(q => q.symbol === "^BSESN");
          setIndices(
            {
              nifty: {
                price: nifty?.price || 0,
                change: nifty?.dayChange || 0,
                isDown: nifty?.isLoss || false
              },
              sensex: {
                price: sensex?.price || 0,
                change: sensex?.dayChange || 0,
                isDown: sensex?.isLoss || false
              }
            }
          );
        })
        .catch(err => {
          console.error(err);
        });
    };

    fetchIndices();

    const interval = setInterval(
      fetchIndices,
      15000
    );

    return () => clearInterval(interval);

  }, []);
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY50</p>
          <p className="index-points">{indices.nifty.price} </p>
          <p className={
            indices.nifty.isDown
              ? "down percent"
              : "up percent"
          }>
            {indices.nifty.change.toFixed(2)}%
          </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{indices.sensex.price}</p>
          <p className={
            indices.sensex.isDown
              ? "down percent"
              : "up percent"
          }>
            {indices.sensex.change.toFixed(2)}%
          </p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
