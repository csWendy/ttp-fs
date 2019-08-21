import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Register from './Components/Register';
import Navigation from "./Components/Navigation/Navigation";
import Landing from "./Components/Landing/Landing";
// import { directive } from '@babel/types';

const App=() => (
  <div>
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route path ="/" component ={Landing} exact/>
        <Route exact path="register" component={Register}/>
        </Switch>
    </BrowserRouter>
    </div>
)

export default App;
