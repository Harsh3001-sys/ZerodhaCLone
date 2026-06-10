import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import {toast} from "react-toastify";
import axios from "axios";
import { useLivePrices } from "../context/LivePriceContext";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const { livePrices } = useLivePrices();

  const { closeSellWindow } = useContext(GeneralContext);

  useEffect(() => {

  if (!livePrices.length) return;

  const symbolMap = {
    NIFTY50: "^NSEI",
    SENSEX: "^BSESN"
  };

  const liveStock = livePrices.find(
    q =>
      (symbolMap[uid] || `${uid}.NS`)
      === q.symbol
  );

  if (liveStock) {
    setStockPrice(liveStock.price);
  }

}, [livePrices, uid]);

const handleSellClick = async () => {
  try {

    const { data } = await axios.post(
      "http://localhost:3002/newOrder",
      {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
      },
      { withCredentials: true }
    );

    toast.success(
      data.message || "Order placed successfully!"
    );

    closeSellWindow();

  } catch (error) {

    toast.error(
      error.response?.data?.message ||
      "Failed to place order"
    );

    console.error(error);
  }
};

const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <>
      <div
        className="modal-backdrop-custom"
        onClick={handleCancelClick}
      ></div>
      <div className="container" id="sell-window" draggable="true">
        <div className="regular-order">
          <div className="inputs">
            <fieldset>
              <legend>Qty.</legend>
              <input
                type="number"
                name="qty"
                id="qty"
                onChange={(e) => setStockQuantity(Number(e.target.value))}
                value={stockQuantity}
              />
            </fieldset>
            <fieldset>
              <legend>Price</legend>
              <input
                type="number"
                name="price"
                id="price"
                value={stockPrice}
                readOnly
              />
            </fieldset>
          </div>
        </div>

        <div className="buttons">
          <span>Margin required ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
          <div>
            <Link className="btn btn-danger" onClick={handleSellClick}>
              Sell
            </Link>
            <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellActionWindow;
