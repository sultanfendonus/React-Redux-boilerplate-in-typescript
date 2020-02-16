import React from 'react';
import {Router, Route, Switch} from 'react-router-dom'
import HomePage from './home/HomePage'
import history from "../history";
import DashBoardMainPage from "./dashboard/DashBoardMainPage";

const App: React.FC<{}> = ()=>{
  return(
      <Router history={history}>
        <Switch>
          <Route path='/' exact component ={HomePage}  />
          <Route path='/dashboard' exact component ={DashBoardMainPage}  />
        </Switch>
      </Router>
  )
}

export default App;
