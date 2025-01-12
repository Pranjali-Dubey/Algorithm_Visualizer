// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Login.css'; // Optional for custom styles

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError(''); // Clear any previous errors

//     // Send a POST request to login API
//     axios.post('http://localhost:3001/login', { email, password })
//       .then((result) => {
//         console.log('Login response:', result.data);
//         if (result.data.status === 'Success') {
//           localStorage.setItem('user', JSON.stringify(result.data.user)); // Store user info in localStorage
//           navigate('/home'); // Redirect to the home page
//         } else {
//           setError(result.data.message || 'Invalid credentials'); // Set error message
//         }
//       })
//       .catch((err) => {
//         console.error('Error:', err);
//         setError('Error logging in. Please try again.'); // Display error message
//       });
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#f0f2f5' }}>
//       <div className="card p-5 shadow" style={{ width: '400px', borderRadius: '12px' }}>
//         <h3 className="text-center mb-3">Login to Your Account</h3>

//         <form onSubmit={handleSubmit}>
//           <div className="form-group mb-3">
//             <input 
//               type="email" 
//               className="form-control" 
//               placeholder="Email Address" 
//               onChange={(e) => setEmail(e.target.value)} 
//               value={email} 
//               required 
//             />
//           </div>
//           <div className="form-group mb-3">
//             <input 
//               type="password" 
//               className="form-control" 
//               placeholder="Password" 
//               onChange={(e) => setPassword(e.target.value)} 
//               value={password} 
//               required 
//             />
//           </div>
//           {error && <p className="text-danger">{error}</p>}
//           <button type="submit" className="btn btn-success w-100">Login</button>
//         </form>

//         <p className="text-center mt-3">
//           Don't have an account?{' '}
//           <Link to="/signup" className="text-decoration-none">Sign up here</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // For custom styles

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('http://localhost:3001/login', { email, password });
            console.log('Login response:', response.data);

            if (response.data.status === 'Success') {
                localStorage.setItem('user', JSON.stringify(response.data.user));
                localStorage.setItem('token', response.data.token);
                alert('Login successful!');
                navigate('/Home_page');
            } else {
                setError(response.data.message || 'Invalid credentials');
            }
        } catch (err) {
            setLoading(false);
            console.error('Error:', err);
            setError(err.response?.data.message || 'Network error, please try again.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h3 className="login-title">Login to Your Account</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {error && <p className="text-danger">{error}</p>}

                    <button
                            type="submit"
                            className="btn w-100"
                            style={{ backgroundColor: 'blue', color: 'white' }}
                            disabled={loading}
>
    {loading ? <div className="loading-spinner"></div> : 'Login'}
</button>

                </form>

                <p className="text-center mt-3">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-decoration-none">Sign up here</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;

