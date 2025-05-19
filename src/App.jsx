import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/Home/Home";
import Seo from "./components/pages/Seo/Seo";
import Header from "./components/Header";
// import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      {loading ? <Preloader /> : null}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/seo" element={<Seo />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}


export default App;
