import React from "react";
import NavBar from "./component/Navbar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/HomePage/Home";
import EssayWriting from "./component/EssayWriting/EssayWriting";
import Pictures from "./component/Pictures/Pictures";
import Contact from "./component/Contact/Contact";
import Interview from "./component/Interview/Interview";
import Biography from "./component/Biography/Biography";


function App() {
  return (
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/biography">
            <Biography />
          </Route>
          <Route path="/interview">
            <Interview />
          </Route>
          <Route path="/Essaywriting">
            <EssayWriting />
          </Route>
          <Route path="/Pictures">
            <Pictures />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
  );
}
export default App;
