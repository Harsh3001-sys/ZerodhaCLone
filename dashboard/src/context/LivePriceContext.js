import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const LivePriceContext = createContext();

export const LivePriceProvider = ({ children }) => {

  const [livePrices, setLivePrices] = useState([]);

  const fetchLivePrices = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3002/live-prices",
        {
          withCredentials: true
        }
      );

      setLivePrices(res.data);

    } catch (err) {
      console.error("Failed fetching prices:", err);
    }
  };

  useEffect(() => {
    fetchLivePrices(); 
  }, []);

  return (
    <LivePriceContext.Provider value={{ livePrices }}>
      {children}
    </LivePriceContext.Provider>
  );
};

export const useLivePrices = () => {
  return useContext(LivePriceContext);
};