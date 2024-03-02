import React, { useState } from 'react';
import './Register.css';
import './Form.css';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
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
            console.log(formData)
            const response = await fetch('http://127.0.0.1:5000/Register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('User registered successfully');
                window.alert('Register complete');
                // Redirect or navigate to another page upon successful registration
            } else {
                const errorData = await response.json();
                console.error('Failed to register user:', response.status, response.statusText);
                window.alert(`Failed to register user: ${errorData.error}`);
            }
        } catch (error) {
            console.error('Error during registration:', error);
            window.alert('Error during registration. Please try again.');
        }
    };

    return (
        <div className='main-bg-regis'>
            <div className='wrapper'>
                <form onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    <div className='input-box'>
                        <input
                            type='text'
                            name='username'
                            placeholder='Username'
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='input-box'>
                        <input
                            type='text'
                            name='email'
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='input-box'>
                        <input
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='input-box'>
                        <input
                            type='password'
                            name='confirmPassword'
                            placeholder='Confirm password'
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
