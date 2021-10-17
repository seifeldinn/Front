import Home from './component/home';
import About from './component/about';
import Contact from './component/contact';
import Header from './component/Header';
import Login from './component/Login/login';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Signup from './component/Signup/signup';

function App() {
  
  // const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <Router>
    <div className="App">
     <Switch>
       <Route exact path='/' component={Signup}></Route>
       <Route exact path='/login' component={Login}></Route>
       {/* <Route exact path='/signup' component={Signup}></Route> */}
     </Switch>
   </div>
</Router>
  );
}

export default App;
