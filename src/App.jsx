import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process (e.g., fetching data, etc.)
    setTimeout(() => {
      setLoading(false); // Hide preloader after 2 seconds
    }, 2000); // Adjust this time based on your needs
  }, []);

  return (
    <Router>
      {loading ? <Preloader /> : null}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
