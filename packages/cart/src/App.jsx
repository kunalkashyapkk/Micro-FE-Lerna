import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "home/Header";
import Footer from "home/Footer";
import Cartdetail from "./Cartdetail";

const App = () => (
  <div>
    <Header />
    <Cartdetail />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
