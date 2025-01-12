import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setError('');
  };

  const validateEmail = (email) => {
    // Simple email validation using regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    // Password should be at least 8 characters, include uppercase, lowercase, number, and special character
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    if (!validatePassword(formData.password)) {
      setError('Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/signup', formData);
      console.log('Sign-up successful:', response.data);
      alert('Sign-up successful');
      navigate('/Login');
    } catch (err) {
      setError('Error submitting form');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h3 className="text-center mb-3" style={{ color: 'blue' }}>Create an Account</h3>

        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input 
              type="text" 
              name="username"
              className="input-field"
              placeholder="Username"
              onChange={handleChange}
              value={formData.username}
              required 
              disabled={loading}
            />
            <label htmlFor="username" className="floating-label">Username</label>
          </div>
          <div className="input-group mb-3">
            <input 
              type="email" 
              name="email"
              className="input-field"
              placeholder="Email Address" 
              onChange={handleChange} 
              value={formData.email} 
              required 
              disabled={loading}
            />
            <label htmlFor="email" className="floating-label">Email Address</label>
          </div>
          <div className="input-group mb-3">
            <input 
              type="password" 
              name="password"
              className="input-field"
              placeholder="Password" 
              onChange={handleChange} 
              value={formData.password} 
              required 
              disabled={loading}
            />
            <label htmlFor="password" className="floating-label">Password</label>
          </div>
          <div className="input-group mb-3">
            <input 
              type="password" 
              name="confirmPassword"
              className="input-field"
              placeholder="Confirm Password" 
              onChange={handleChange} 
              value={formData.confirmPassword} 
              required 
              disabled={loading}
            />
            <label htmlFor="confirmPassword" className="floating-label">Confirm Password</label>
          </div> 

          {error && <p className="text-danger">{error}</p>}
          
          <button 
            type="submit" 
            className="submit-button"
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center mt-3">
          Already have an account?{' '}
          <Link to="/login" className="text-decoration-none">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
