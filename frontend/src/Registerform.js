import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineMail, AiOutlineLock, AiOutlineUser } from 'react-icons/ai'; 
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });

    setErrors({
      ...errors,
      [e.target.id]: ''
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:4000/api/users/register', {
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
      }
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
            <input type="tel" className="form-control" id="mobile" value={formData.mobile} onChange={handleChange} />
          </div>
          {errors.mobile && <div className="text-danger">{errors.mobile}</div>}
        </div>
        <div className='text-center'>
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Registerform;
