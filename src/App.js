import React from "react";
import NavBar from "./Components/NavBar";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage";
import Register from "./Components/Register";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main style={{ marginTop: "70px" }}>
        <Route exact path="/" component={Homepage}/>
      </main>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </div>
  );
}

export default App;
