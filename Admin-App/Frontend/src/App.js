// #C1 
// component has various components 
// containers has various pages 

import './App.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // old syntax 

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import { Switch } from 'react-router-dom';
// import PrivateRoute from './components/HOC/PrivateRoute';

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './actions';

import CreatePost from './containers/CreatePost';
import Posts from './containers/Posts';

import CreateBicycle from './containers/CreateBicycle';
import Bicycles from './containers/Bicycles';

import AllRequests from './containers/Requests';
import MyBicycles from './containers/MyBicycles';
import AllReturnRequests from './containers/ReturnRequests';
import UsersList from './containers/UsersList';

function App() {


  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();


  useEffect(() => {

    if (!auth.authenticate) {
      dispatch(isUserLoggedIn())
    }

  }, []);

  return (
    <div className="App">
      {/* <Router> */}

        {/* <Switch> */}
        {/* <Route path='/' exact component={Home} /> */}
        {/* <Route path='/signin' component={Signin} /> */}
        {/* <Route path='/signup' component={Signup} /> */}
        {/* </Switch> */}

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <PrivateRoute path="/" element={<Home />} /> */}
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />

          <Route path='/posts' element={ <Posts /> } />
          <Route path='/createPost' element={<CreatePost />} /> 
          
          <Route path='/bicycles' element={ <Bicycles /> } />
          <Route path='/createBicycle' element={<CreateBicycle />} />

          {/* Bicylce */}
          {/* Create Bicylce */}

          <Route path='/requests' element={<AllRequests />} />

          <Route path='/myBicycles' element={<MyBicycles />} />

          <Route path='/returnRequests' element={<AllReturnRequests />} />
          <Route path='/users' element={<UsersList />} />

        </Routes>
 
      {/* </Router> */}
    </div>
  );
}

export default App;
