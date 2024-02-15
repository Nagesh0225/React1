import React from 'react';
import NavBar from './NavBar';

const DashboardB = () => {
  return (
    <>
        <NavBar/>
        <NavLink className="nav-link px-5 " exact to="/Dashboard">Home </NavLink>
    </>
  )
}

export default DashboardB;