import React, { useState } from 'react';
import { AiOutlineMail, AiOutlineLock, AiOutlineMobile } from 'react-icons/ai';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Loginform = ({ onRegisterLinkClick }) => {
  const [loginMethod, setLoginMethod] = useState('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleLoginMethodChange = (method) => {
    setLoginMethod(method);
  };

  const handleSendOtp = () => {
    // Here you can add logic to send OTP to the user's mobile number
    // For now, we'll just simulate sending OTP and mark it as sent
    setOtpSent(true);
  };

  const handleResendOtp = () => {
    // Here you can add logic to resend OTP to the user's mobile number
    // For now, we'll just simulate resending OTP
    setOtp('');
    setOtpSent(false);
    handleSendOtp();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (loginMethod === 'email') {
      if (!email.trim()) {
        return toast.error('Email is required');
      }

      if (!password.trim()) {
        return toast.error('Password is required');
      }
    } else if (loginMethod === 'mobile') {
      if (!mobile.trim()) {
        return toast.error('Mobile number is required');
      }

      if (!otp.trim()) {
        return toast.error('OTP is required');
      }
    }

    // Submit the form
    try {
      let bodyData;
      if (loginMethod === 'email') {
        bodyData = JSON.stringify({ email, password });
      } else if (loginMethod === 'mobile') {
        bodyData = JSON.stringify({ mobile, otp });
      }

      const response = await fetch('http://localhost:4000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: bodyData
      });

      if (response.ok) {
        const userData = await response.json();
        console.log(userData);
        // alert(userData.name);
        // alert(userData.userId);
        alert(userData.token);
        window.location.reload();// to reload the page
        localStorage.setItem('userData', JSON.stringify(userData));

        // Clear the form fields
        if (loginMethod === 'email') {
          setEmail('');
          setPassword('');
        } else if (loginMethod === 'mobile') {
          setMobile('');
          setOtp('');
          setOtpSent(false);
        }
        return toast.success(`${userData.name} logged in successfully`);
      } else {
        const data = await response.json();
        return toast.error(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('An error occurred during login');
    }
  };

  return (
    <div>
      <div className="mb-3">
        <div>
          <label>
            <input
              type="radio"
              name="loginMethod"
              value="email"
              checked={loginMethod === 'email'}
              onChange={() => handleLoginMethodChange('email')}
            />
            Email
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="loginMethod"
              value="mobile"
              checked={loginMethod === 'mobile'}
              onChange={() => handleLoginMethodChange('mobile')}
            />
            Mobile
          </label>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        {loginMethod === 'email' && (
          <>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                <AiOutlineMail /> Email address
              </label>
              <div className="input-group">
                <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                <AiOutlineLock /> Password
              </label>
              <div className="input-group">
                <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} />
              </div>
              <div className="text-end">
                <a href="/forgot-password">Forgot Password?</a>
              </div>
            </div>
          </>
        )}
        {loginMethod === 'mobile' && (
          <>
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">
                <AiOutlineMobile /> Mobile number
              </label>
              <div className="input-group">
                <input type="tel" className="form-control" id="mobile" value={mobile} onChange={handleMobileChange} />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="otp" className="form-label">
                OTP
              </label>
              <div className="input-group">
                <input type="text" className="form-control" id="otp" value={otp} onChange={handleOtpChange} disabled={!otpSent} />
                {!otpSent && <button type="button" className="btn btn-primary ms-2" onClick={handleSendOtp}>Send OTP</button>}
                {otpSent && <button type="button" className="btn btn-primary ms-2" onClick={handleResendOtp}>Resend OTP</button>}
              </div>
            </div>
          </>
        )}
        <div className='text-center'>
          <button type="submit" className="btn btn-primary mx-2" disabled={loginMethod === 'mobile' && !otp.trim()}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Loginform;
