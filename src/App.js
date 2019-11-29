import React from "react";
import NavBar from "./Components/NavBar";
import "./App.css";
import Homepage from "./Components/Homepage"

function App() {
  return (
    <div className="App">
      <NavBar />
      <main style={{marginTop: "70px"}}>
      <Homepage/>
      </main>
      
     
    </div>
  );
}

export default App;
