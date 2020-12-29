import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { ThemeProvider, createTheme, Arwes, Puffs } from "arwes";
import Landing from "./app/landing";

function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <Arwes>
        <div className="App">
          <Landing></Landing>
        </div>
        <Puffs style={{ top: "25%" }} quantity={13} puffInterval={2500}></Puffs>
        <Puffs style={{ top: "55%" }} quantity={18} puffInterval={3000}></Puffs>
        <Puffs style={{ top: "75%" }} quantity={15} puffInterval={3500}></Puffs>
      </Arwes>
    </ThemeProvider>
  );
}

export default App;
