import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Profile from './Profile';
import Dashboard from './Dashbord';
import Contact from './Contact';


const NavBar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
  
    const handleProfileClick = () => {
      setShowSidebar(!showSidebar);
    };
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse " id="navbarSupportedContent">
  {/* <form className="form-inline my-2 my-lg-0"> */}
      {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
       
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> 
    </form> * */}
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item active px-2 ">
    <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"/>
      </li>
    <li className="nav-item active ">
    <button className="btn btn-outline-success px-2 my-2 my-sm-0" type="submit">Search</button> 
      </li>
      <li className="nav-item active ">
        <NavLink className="nav-link px-5 " exact to="/Dashboard">Home{<Dashboard/>} </NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link px-5" exact to="/Contact">Contact{<Contact/>} </NavLink>
      </li>
    
      <li className="nav-item active ">
        <NavLink className="nav-link px-5" exact to="/About" >About</NavLink>
      </li>
    </ul>

    <ul className="navbar-nav d-flex flex-row me-1">
    <li className="nav-item active float-xxl-end">

<button className="btn btn-link nav-link px-5" onClick={handleProfileClick}>
  <img src="https://parosdivingcenter.com/wp-content/uploads/2017/05/181549.png"
  alt='icon'/>
</button>
</li>
      </ul>

        
  </div>
</nav>
{showSidebar && (
        <div className="position-relative">
         <Profile/>
        </div>
      )}

    </>
  )
}

export default NavBar;