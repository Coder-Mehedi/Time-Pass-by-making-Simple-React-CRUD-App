import React from "react";
import "./App.css";
import Coders from "./components/coders/Coders";

function App() {
  return (
    <div className="App">
      <h1 className="center">React CRUD App</h1>
      <div className="row">
        <div className="col m6 m3 offset-m3">
          <Coders />
        </div>
      </div>
    </div>
  );
}

export default App;
