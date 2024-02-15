import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './Login';
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Dashboard from './Dashboard';
import ForgotPassword from './Forgetpassword';
import Login1 from './Login1';
// import DashboardA from './DashboardA';
import DashboardA from './Dashboard';
import UserDetails from './Edit';
import View from './View';
import About from './About';
import Contact from './Contact';
const App = () => {
  const handleLogin = (userData) => {
    console.log('Logged in with user data:', userData);
    window.location.href = '/Dashboard';
  };
 
  return (
    <><div className='p-3'>
    
   <Router>
          <Routes>
            <Route exect path="/"  element={<Login1 onLogin={handleLogin}/>} />
            <Route   exect path="/Dashboard" element={<DashboardA />} />
            {/* <Route exect path="/Dashboard" element={<DashboardA />} /> */}
            <Route exect path="/Edit/:userId" element={<UserDetails/>} />
            <Route exect path="/View/:userId" element={<View/>} />
            <Route   exect path="/Forgetpassword" element={<ForgotPassword />} />
            <Route exect path='/About' element={<About/>}/>
            <Route exect path='/Contact' element={<Contact/>}/>
          </Routes>
        </Router>
    </div></>
  )
}

export default App;
