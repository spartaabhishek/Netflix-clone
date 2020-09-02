import React from 'react';
import Main from './pages/index'
import '../src/css/App.css';
import {Switch,Route} from 'react-router-dom'
import Login from './pages/login'
function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default App;
