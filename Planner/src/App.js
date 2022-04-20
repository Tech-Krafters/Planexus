import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes,Switch,  Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AppMain from './components/App/Mainpage/AppMain';
import Signup from './components/App/GSignUp/Signup';
import PlansList from './components/plans-list.components';
import Hiw from './components/HowIW/Hiw';
import Anc from './components/AnC/Anc';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Signup' component={Signup} />
          <Route path='/HIW' component={Hiw} />
          <Route path='/App' component={AppMain} />
          <Route path='/About' component={Anc} />
        </Switch>
      </Router>
    </>
  );
}

export default App;