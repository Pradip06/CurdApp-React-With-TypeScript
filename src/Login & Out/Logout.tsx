import React, { Component } from 'react';
import NavBarMenu from '../component/NavBar'

import {
    Redirect
 } from 'react-router-dom'
 
 const Logout = () => {
    localStorage.clear();
    return (
            <>
            <NavBarMenu />
            <Redirect to="/login_list" />
            </>
    )
     
};

export default Logout;