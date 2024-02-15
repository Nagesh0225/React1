// ForgetPassword.jsx
import React, { useState } from 'react';

const ForgetPassword = ({ onPasswordReset }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handlePasswordReset = (e) => {
    e.preventDefault();
    // Perform password reset logic, such as sending a reset link to the user's email
    // For simplicity, let's assume the reset is successful
    setSuccessMessage('Password reset instructions sent to your email.');
    if (typeof onPasswordReset === 'function') {
      onPasswordReset();
    }
  };

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Forgot Password</h2>
          {successMessage && <div className="alert alert-success">{successMessage}</div>}
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handlePasswordReset}>
          
            <button type="submit" className="btn btn-primary">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
