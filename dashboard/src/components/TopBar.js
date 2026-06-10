import React from "react";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import {useLivePrices} from "../context/LivePriceContext";
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
  const { livePrices } = useLivePrices();
  useEffect(() => {

  if (!livePrices.length) return;

  const nifty = livePrices.find(
    q => q.symbol === "^NSEI"
  );

  const sensex = livePrices.find(
    q => q.symbol === "^BSESN"
  );

  setIndices({
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
  });

}, [livePrices]);
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
