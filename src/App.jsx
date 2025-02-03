// import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "/src/components/Navbar";
import Footer from "/src/components/Footer";
// import Loader from "/src/components/Loader"; 

function App() {
  // const [loading, setLoading] = useState(true);

  // // Simulate loading with a timeout or your API call
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); // Adjust duration as needed

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      {/* {loading ? (
        <Loader /> // Show Loader while loading
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )} */}

          <Navbar />
          <Outlet />
          <Footer />
    </>
  );
}

export default App;
