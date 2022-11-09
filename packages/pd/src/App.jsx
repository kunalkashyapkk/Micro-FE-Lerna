import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Detail from "./Detail";
const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Detail />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
