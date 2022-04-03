import React from "react";
import Home from "./routes/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Detail from "./routes/Detail";

function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
          <Switch>
              <Route path="/movie/:id">
                  <Detail/>
              </Route>
              <Route path="/">
                  <Home/>
              </Route>
          </Switch>
      </Router>
  )
}

export default App;
