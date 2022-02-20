import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import Login from './components/Login';
import User from './components/User';
import UserBusList from './components/UserBusList';
import Register from './components/Register';
import Payment from './components/Payment';
import Receipt from './components/Receipt';
import HomePage from './components/HomePage';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
              <div className='image'>
                <div className=" container ">
                    <Switch> 
                          <Route path = "/home" component = {HomePage}></Route>
                          <Route path = "/login" component = {Login}></Route>
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/bus" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-bus/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-bus/:id" component = {ViewEmployeeComponent}></Route>
                          <Route path = "/user" component = {User}></Route>
                          <Route path = "/userbuslist" component = {UserBusList}></Route>
                          <Route path = "/register" exact component = {Register}></Route>
                          <Route path = "/payment" component = {Payment}></Route>
                          <Route path = "/receipt" component = {Receipt}></Route>
                    </Switch>
                </div>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
