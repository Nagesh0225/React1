import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import user from './Arr';

const Login = () => {
  const navigation = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [responseData, setResponseData] = useState(null);
  const handleLogin = async () => {
    // Check if username and password are not empty
    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }

  //   try {
  //     const response = await fetch('https://dummyjson.com/auth/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         username,
  //         password,
  //       }),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  
  //       setError(''); // Clear any previous error messages
  //       setResponseData(data);
  //       navigation("/Dashboard", { state: { responseData: data } });
  //     } else {
  //       setError('Invalid username or password. Please try again.');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     setError('An error occurred during login. Please try again.');
  //   }
  // };
  
  const arr1 = user.find(
    (userData) => userData.username === username && userData.password === password
  );

  if (arr1) {
    setError(''); // Clear any previous error messages
    setResponseData(arr1);
    navigation('/Dashboard', { state: { responseData: arr1 } });
  } else {
    setError('Invalid username or password. Please try again.');
  }
};
  return (
    <>
      <section className="vh-100" style={{backgroundColor: "#9A616D"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{borderRadius: "1rem"}}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://www.gfxtra31.com/uploads/posts/2020-06/1592211667_b08b39mt1m.01.s001.lxxxxxxx.jpg"
                alt="login form" className="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}} />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">
      <form onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}>
      <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
                    <span className="h1 fw-bold mb-0">Login</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Sign into your account</h5>
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
          placeholder="Password"
        />
        <br />
        <button className="btn btn-primary" type="submit">
          Login
        </button><br/>
        <a class="small text-muted" href="./Forgetpassword">Forgot password?</a>
                  {/* <p class="mb-5 pb-lg-2" style={{color: "#393f81"}}>Don't have an account? <a href="#!"
                      style={{color: "#393f81"}}>Register here</a></p>
                  <a href="#!" class="small text-muted">Terms of use.</a>
                  <a href="#!" class="small text-muted">Privacy policy</a> */}
      </form>
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
     
    </>
  );
};

export default Login;
