import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import SignUp from "./pages/SignUp";
import TopBar from "./components/TopBar";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <TopBar />
      <div className="main">
        <SignUp />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
