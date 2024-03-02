import React, { useState } from 'react';
import './Form.css';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:5000/LogIn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Login successful');
                const data = await response.json();
                console.log(data);
                // Perform actions upon successful login
            } else {
                const errorData = await response.json();
                console.error('Login failed:', errorData.error);
                window.alert(`Failed to login: ${errorData.error}`);
                // Handle login failure
            }
        } catch (error) {
            window.alert('Error during login. Please try again.');
            console.error('Error during login:', error);
            // Handle other errors
        }
    };

    return (
        <div className='main-bg-login'>
            <div className='wrapper'>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input
                            type="text"
                            name="username"
                            placeholder='Email or Username'
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                        <FaUser className='icon' />
                    </div>
                    <div className='input-box'>
                        <input
                            type="password"
                            name="password"
                            placeholder='Password'
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <FaLock className='icon' />
                    </div>
                    <div className='remember-forgot'>
                        <label><input type="checkbox" />Remember me</label>
                        <a href='#sadsa'>Forgot Password</a>
                    </div>

                    <button type='submit'>Login</button>

                    <div className='register-link'>
                        <p>Don't have an account? <a href="/Register">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
