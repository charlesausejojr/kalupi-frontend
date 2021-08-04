import React, { useState, useEffect, Component } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.css"
import { Avatar, Button, IconButton } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../constants/actionTypes';
import { useHistory } from 'react-router-dom';

function Navbar() {
  // we set the localstorage through the reducer 
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();

  //to have access to the change in user
  const location = useLocation();

  const logout = () => {
    dispatch({type: LOGOUT});
    history.push('/auth');
    setUser(null);
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
  },[location])

  return (
    <nav id='font-custom' className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <img className="logo" src="https://i.ibb.co/JvqxFRD/circle-cropped.png" alt="circle-cropped" border="0" />
    <Link to="/" className="navbar-brand">Kalupi</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Questions</Link>
          </li>
          {user &&
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Submit Question</Link>
          </li> }
          {user &&
          <>
          <li className="navbar-item">
          <Link to={"/myQuestions/" + user?.result.googleId} className="nav-link">Your Questions</Link>
          </li>  
          <li className="navbar-item">
          <Link to={"/myAnswers/" + user?.result.googleId} className="nav-link">Your Answers</Link>
          </li>  
          </>
          }
        </ul>
        
      </div>
      {!user ? 
      <div>
        <Link to="/auth" className="nav-link">Sign In</Link>
      </div> : 
      <div className="navbar__right">
        <h5 className="navbar__right__name">{user?.result.name}</h5>
        <Avatar className="navbar__right__user" alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
        <IconButton className='header__logout' onClick = {logout}>
              <ExitToAppIcon  />
              <small className='logout'>Logout</small>
          </IconButton>
      </div>}
      
        
    </div>
  </nav>
  )
}

export default Navbar
