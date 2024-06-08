import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Registration successful
        alert('Registration successful!');
        // You may want to redirect the user or perform other actions here
      } else {
        // Registration failed
        const data = await response.json();
        alert(data.error || 'Registration failed');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      alert('An error occurred while registering. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="mobile" className="form-label">Mobile</label>
        <input type="text" className="form-control" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  );
};

export default RegisterForm;
