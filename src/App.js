import React,{useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css"
import data from "./router/data";
import NavBar from "./components/NavBar";
import { Context } from "./context/GlobalState";
function App() {
  
  const routeMaps = data.map((item, index) => (
    <Route
      key={index}
      exact={item.isExact}
      path={item.link}
      component={item.component}
    />
  ));
  return (
    <Router>
       <Context>
      <NavBar links={data} />
      <Switch>
        {routeMaps}
        <Route>
          <Redirect to="/404" />
        </Route>
      </Switch>
      </Context>
    </Router>
  );
}

export default App;
