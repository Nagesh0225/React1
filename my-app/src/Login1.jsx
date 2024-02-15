// Login1.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ForgetPassword from './Forgetpassword';

const Login1 = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showForgetPassword, setShowForgetPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'nagesh' && password === '12345') {
      onLogin({ username });
    } else {
      setError('Incorrect username or password. Please try again.');
    }
  };


  return (
    <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10 ">
          
            <div className="card  " style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
              
                <div className="col-md-6 col-lg-5 d-none d-md-block  pt-5">
                  <img src="https://th.bing.com/th/id/OIP.dAUB1v7-BNx3YBpXHwwaAgAAAA?w=400&h=200&rs=1&pid=ImgDetMain"
                    alt="login form" className="img-fluid pt-5 " style={{ borderRadius: "1rem 0 0 1rem" }} />
                </div>
                <div className='shadow-lg  mb-3 mt-4  col-lg-6  bg-white rounded'>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-lg-5 text-black">
                    <form onSubmit={handleLogin}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
                        <span className="h1 fw-bold mb-0">Login</span>
                      </div>

                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign into your account</h5>
                      <label htmlFor="username">User Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        aria-describedby="emailHelp"
                        placeholder="Enter User Name"
                      />
                      <br />
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                      />
                      <br />
                      <button className="btn btn-primary" type="submit">
                        Login
                      </button><br />
                      <section >
      <a className="small text-muted" href="/Forgetpassword" onClick={() => setShowForgetPassword(true)}>
        Forgot password?
      </a>
     
    </section>
                    </form>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login1;
