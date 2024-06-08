import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineMail, AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { FaUserPlus } from 'react-icons/fa';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Registerform = ({ onSuccessfulRegistration }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: ''
  });
  const [loading, setLoading] = useState(false); // New loading state

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
    setErrors({
      ...errors,
      [id]: ''
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitted

    // Basic validation
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile.trim())) {
      newErrors.mobile = 'Mobile should start with 6 and be 10 digits long';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users/register`, {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json'
        },
          body: JSON.stringify(formData)
        });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Registration failed');
      }

      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        mobile: ''
      });

      toast.success(`${formData.name} Registered successfully!`);

      // Call the callback function to switch to the login form
      onSuccessfulRegistration();
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setLoading(false);
    }
  } else {
    setLoading(false);
}
  };

return (
  <div>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          <AiOutlineUser /> Name
        </label>
        <div className="input-group">
          <input type="text" className="form-control" id="name" value={formData.name} onChange={handleChange} />
        </div>
        {errors.name && <div className="text-danger">{errors.name}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          <AiOutlineMail /> Email address
        </label>
        <div className="input-group">
          <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} />
        </div>
        {errors.email && <div className="text-danger">{errors.email}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          <AiOutlineLock /> Password
        </label>
        <div className="input-group">
          <input
            type={showPassword ? 'text' : 'password'}
            className="form-control"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>
        {errors.password && <div className="text-danger">{errors.password}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">
          Confirm Password
        </label>
        <div className="input-group">
          <input type="password" className="form-control" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        </div>
        {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="mobile" className="form-label">
          Mobile
        </label>
        <div className="input-group">
          <input type="number" className="form-control" id="mobile" value={formData.mobile} onChange={handleChange} maxLength="10" />
        </div>
        {errors.mobile && <div className="text-danger">{errors.mobile}</div>}
      </div>
      <div className='text-center'>
        <button type="submit" className={`btn btn-primary ${loading ? 'disabled' : ''}`}>
          <FaUserPlus /> Register {loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
        </button>
      </div>
    </form>
  </div>
);
}

export default Registerform;
