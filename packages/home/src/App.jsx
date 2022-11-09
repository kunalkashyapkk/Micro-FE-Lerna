import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "./Header";
import Footer from "./Footer";
import Detail from "pd/Detail";
import Pic from "pdp/Pic";
const App = () => (
  <div>
    <Header />
    <div className="text-3xl mx-auto max-w-6xl">
    <Pic />
    <Detail />
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
