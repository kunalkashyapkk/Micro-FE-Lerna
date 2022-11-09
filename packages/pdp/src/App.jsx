import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Pic from "./Pic";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Pic />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
