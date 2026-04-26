import React, { useState, useContext } from "react";
import { useEffect } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import { Tooltip, Grow } from "@mui/material";
import "./watchlist.css";
import Loader from "./Loader";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist as initialWatchlist } from "../data/data";
import { DoughnutChart } from "./DoughnoutChart";

const WatchList = () => {
  const [watchlistData, setWatchlistData] = useState(initialWatchlist);
  const [searchTerm, setSearchTerm] = useState("");
  const labels = watchlistData.map((subArray) => subArray["name"]);
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlistData.map((stock) => stock.price),

        backgroundColor: [
          "rgba(46, 125, 250, 0.75)",   // blue
          "rgba(0, 184, 148, 0.75)",    // green
          "rgba(255, 171, 0, 0.75)",    // amber
          "rgba(142, 68, 173, 0.75)",   // purple
          "rgba(231, 76, 60, 0.75)",    // red
          "rgba(26, 188, 156, 0.75)",   // teal
          "rgba(52, 152, 219, 0.75)",   // sky blue
          "rgba(241, 196, 15, 0.75)"    // gold
        ],

        borderColor: [
          "#2E7DFA",
          "#00B894",
          "#FFAB00",
          "#8E44AD",
          "#E74C3C",
          "#1ABC9C",
          "#3498DB",
          "#F1C40F"
        ],

        borderWidth: 2,
      },
    ],
  };

  const filteredWatchlist = watchlistData.filter((stock) =>
    stock.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {

    const fetchLivePrices = () => {

      axios.get(
        "http://localhost:3002/live-prices",
        { withCredentials: true }
      )
        .then(res => {

          setWatchlistData(prev =>
            prev.map(stock => {

              const liveStock = res.data.find(
                q =>
                  q.symbol.replace(".NS", "") ===
                  stock.name
              );

              if (!liveStock) return stock;

              return {
                ...stock,
                price: liveStock.price,
                percent:
                  liveStock.dayChange.toFixed(2) + "%",
                isDown: liveStock.isLoss
              };

            })
          );

        })
        .catch(err => {
          console.error(err);
        });

    };

    fetchLivePrices();

    const interval = setInterval(
      fetchLivePrices,
      15000
    );

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search:infy, bse, nifty fut weekly, gold mcx"
          className="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="counts"> {filteredWatchlist.length} / {watchlistData.length}</span>
      </div>

      <ul className="list">
        {filteredWatchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  const handleSellClick = () => {
    generalContext.openSellWindow(uid);
  }

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleSellClick}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
