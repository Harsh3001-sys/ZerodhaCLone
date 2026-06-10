import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_API_URL}/auth`,
          {},
          { withCredentials: true }
        );

        if (!data.status) {
          window.location.href = "http://localhost:3000/login"; 
        }
      } catch (err) {
        window.location.href = "http://localhost:3000/login";
      }
    };

    verifyUser();
  }, [navigate]);

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
