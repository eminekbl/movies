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
      <NavBar links={data} />
      <Switch>
        {routeMaps}
        <Route>
          <Redirect to="/404" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
