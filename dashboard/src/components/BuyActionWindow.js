import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import GeneralContext from "./GeneralContext";
import { useLivePrices } from "../context/LivePriceContext";
import { useEffect } from "react";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const { livePrices } = useLivePrices();

  const { closeBuyWindow } = useContext(GeneralContext);

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

  const handleBuyClick = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/newOrder`,
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "BUY",
        },
        { withCredentials: true }
      );

      toast.success(
        data.message ||
        "Order placed successfully!"
      );

      closeBuyWindow();
    }

    catch (error) {

      if (error.response?.status === 400) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong");
      }

      console.error(error);
    }

  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <>
      <div
        className="modal-backdrop-custom"
        onClick={handleCancelClick}
      ></div>
      <div className="container" id="buy-window" draggable="true">
        <div className="regular-order">
          <div className="inputs">
            <fieldset>
              <legend>Qty.</legend>
              <input
                type="number"
                name="qty"
                id="qty"
                onChange={(e) => setStockQuantity(e.target.value)}
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
          <span>Margin required {(stockQuantity * stockPrice).toFixed(2)}</span>
          <div>
            <Link className="btn btn-blue" onClick={handleBuyClick}>
              Buy
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

export default BuyActionWindow;
