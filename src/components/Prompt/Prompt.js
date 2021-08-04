import React, { useState, useEffect, Component } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Prompt.css"
import { Avatar, Button, IconButton } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../constants/actionTypes';
import { useHistory } from 'react-router-dom';

function Prompt() {
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
    <nav id='font-custom' className="prompt navbar navbar-expand-lg navbar-light bg-light">
        <h5>Sign In to interact!</h5>
  </nav>
  )
}

export default Prompt
