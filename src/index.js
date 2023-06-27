import "./test/server";
import "./styles.css";

import * as React from "react";
import ReactDOM from "react-dom";

import LoginSubmission from "./components/login-submission";

function App() {
  return (
    <div className="app">
      <LoginSubmission />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
