// import React from "react";

// import Dashboard from "./Dashboard";
// import TopBar from "./TopBar";

// const Home = () => {
//   return (
//     <>
//       <TopBar />
//       <Dashboard />
//     </>
//   );
// };

// export default Home;

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
          "http://localhost:3002/auth",
          {},
          { withCredentials: true }
        );

        if (!data.status) {
          // navigate("http://localhost:3000/login");
          window.location.href = "http://localhost:3000/login"; 
        }
      } catch (err) {
        // navigate("http://localhost:3000/login");
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
