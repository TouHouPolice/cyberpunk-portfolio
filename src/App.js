import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import "./App.scss";
import {
  ThemeProvider,
  createTheme,
  Arwes,
  Puffs,
  SoundsProvider,
  createSounds
} from "arwes";
import Landing from "./app/landing";
import Profile from "./app/profile";

import {
  ask,
  click,
  deploy,
  error,
  information,
  typing,
  warning
} from "./assets/sounds";

const mySounds = {
  shared: { volume: 1 }, // Shared sound settings
  players: {
    // The player settings
    click: {
      // With the name the player is created
      sound: { src: [click] } // The settings to pass to Howler
    },
    typing: {
      sound: { src: [typing] },
      settings: { oneAtATime: true } // The custom app settings
    },
    deploy: {
      sound: { src: [deploy] },
      settings: { oneAtATime: true }
    },
    ask: {
      sound: { src: [ask] },
      settings: { oneAtATime: true }
    },
    error: {
      sound: { src: [error] },
      settings: { oneAtATime: true }
    },
    information: {
      sound: { src: [information] },
      settings: { oneAtATime: true }
    },
    warning: {
      sound: { src: [warning] },
      settings: { oneAtATime: true }
    }
  }
};

const myTheme = {
  color: {
    secondary: {
      base: "#e5004d",
      dark: "#b7003d",
      light: "#ed155e"
    }
  }
};

console.log(createTheme(myTheme));
function App() {
  return (
    <ThemeProvider theme={createTheme(myTheme)}>
      <SoundsProvider sounds={createSounds(mySounds)}>
        <Arwes>
          <div className="App">
            <Router>
              <Switch>
                <Route exact path="/">
                  <Landing></Landing>
                </Route>
                <Route path="/profile">
                  <Profile></Profile>
                </Route>
              </Switch>
            </Router>
          </div>

          <div className="puffs-container">
            <Puffs
              style={{ top: "25%" }}
              quantity={13}
              puffInterval={2500}
            ></Puffs>
            <Puffs
              style={{ top: "55%" }}
              quantity={18}
              puffInterval={3000}
            ></Puffs>
            <Puffs
              style={{ top: "75%" }}
              quantity={15}
              puffInterval={3500}
            ></Puffs>
          </div>
        </Arwes>
      </SoundsProvider>
    </ThemeProvider>
  );
}

export default App;
