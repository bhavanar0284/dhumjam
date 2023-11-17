// LoginPage.js
import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [userId, setUserId] = useState(null); // Add state to store user ID

  const handleSignIn = async () => {
    // Simulated login with provided credentials
    const apiUrl = 'https://stg.dhunjam.in/account/admin/login';
    const loginCredentials = {
      username: 'DJ@4',
      password: 'Dhunjam@2023',
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginCredentials),
      });

      if (response.ok) {
        const data = await response.json();
        // Save user ID to state
        setUserId(data.data.id);
        // In a real application, you would handle the authentication token securely
        console.log('Login successful:', data);
      } else {
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleRegistration = () => {
    // Redirect or handle new registration logic
    console.log('Redirecting to registration page');
  };

  return (
    <div className="login-container">
      <h2>Venue Admin Login</h2>
      <div className="input-container">
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="input-container">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="eye" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? '👁️' : '👁️‍🗨️'}
        </span>
      </div>
      <button onClick={handleSignIn}>Sign In</button>
      <div>
        <p>New to our platform? <a href="#" onClick={handleRegistration}>Register here</a>.</p>
      </div>

    </div>
  );
};

export default LoginPage;
