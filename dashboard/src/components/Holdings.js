import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
import Loader from "./Loader";
const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3002/getHoldings", {
      withCredentials: true,
    }).then((res) => {
      setAllHoldings(res.data);
    }).catch((err) => {
      console.error("Error fetching holdings:", err);
    }).finally(() => {
      setTimeout(() => {
        setLoading(false);
      }, 800); // 800ms
    });
  }, []);

  useEffect(() => {
    const fetchLivePrices = () => {
      axios.get(
        "http://localhost:3002/live-prices",
        { withCredentials: true }
      )
        .then(res => {

          setAllHoldings(prev =>
            prev.map(stock => {

              const liveStock = res.data.find(
                q => q.symbol.replace(".NS", "") === stock.name
              );

              if (!liveStock) return stock;

              return {
                ...stock,
                price: liveStock.price,
                day: liveStock.dayChange.toFixed(2) + "%",
                isLoss: liveStock.isLoss
              };

            })
          );

        })
        .catch(err => {
          console.error(err);
        });

    }

    fetchLivePrices();

    const interval = setInterval(
      fetchLivePrices,
      15000
    );

    return () => clearInterval(interval);

  }, []);

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(56, 126, 209, 0.75)",
        borderColor: "#387ed1",
        borderWidth: 2,
      },
    ],
  };

  const totalInvestment = allHoldings.reduce(
    (acc, stock) => acc + stock.avg * stock.qty,
    0
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
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {Array.isArray(allHoldings) && allHoldings.map((stock) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={stock._id}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>

              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            ₹{totalInvestment.toFixed(2)}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            ₹{currentValue.toFixed(2)}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={pnl >= 0 ? "profit" : "loss"}>
            ₹{pnl.toFixed(2)}
          </h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
