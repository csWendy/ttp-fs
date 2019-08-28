import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Register from './Components/Register';
import Navigation from "./Components/Navigation/Navigation";
import Landing from "./Components/Landing/Landing";
import Login from './Components/Login';

const App=() => (
  <div>
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route path ="/" component ={Landing} exact/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/portfolio" component={Portfolio} /> 
        <Route exact path="/transaction" component={Transaction} /> */}

        </Switch>
    </BrowserRouter>
    </div>
)

export default App;
