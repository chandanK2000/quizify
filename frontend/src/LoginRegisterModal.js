import React, { useState } from 'react';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash, FaUserPlus, FaMobileAlt, } from 'react-icons/fa';
import './LoginRegisterModal.css';

const LoginRegisterModal = ({ showModal, handleToggleModal, isLoginMode, toggleMode }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginMethod, setLoginMethod] = useState('email');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };



  const handleResendOtp=()=>{
    alert("will sending the otp");
  }

  const handleForgotPassword=()=>{
    alert("forot password");
  }

  return (
    <Modal show={showModal} onHide={handleToggleModal} centered>
      <Modal.Header closeButton className="custom-modal-header">
        <Modal.Title>{isLoginMode ? <><FaUser /> Login</> : <><FaUserPlus /> Register</>}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isLoginMode && (
          <div className="d-flex justify-flex-start mb-3">
            <div className="form-check">
              <input
                type="radio"
                id="emailRadio"
                className="form-check-input"
                name="loginMethod"
                value="email"
                checked={loginMethod === 'email'}
                onChange={() => setLoginMethod('email')}
              />
              <label htmlFor="emailRadio" className="form-check-label">Email</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="mobileRadio"
                className="form-check-input"
                name="loginMethod"
                value="mobile"
                checked={loginMethod === 'mobile'}
                onChange={() => setLoginMethod('mobile')}
              />
              <label htmlFor="mobileRadio" className="form-check-label">Mobile</label>
            </div>
          </div>
        )}
        <Form>
          {isLoginMode && loginMethod === 'email' && (
            <>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <InputGroup>
                  <InputGroup.Text><FaEnvelope /></InputGroup.Text>
                  <Form.Control type="email" placeholder="Enter email" className="custom-input" />
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <InputGroup.Text><FaLock /></InputGroup.Text>
                  <Form.Control
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder="Password"
                    className="custom-input"
                  />
                  <InputGroup.Text onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicForgotPassword" style={{ textAlign: 'right' }}>
                <Button variant="link" onClick={handleForgotPassword}>Forgot Password?</Button>
              </Form.Group>
            </>

          )}
          {isLoginMode && loginMethod === 'mobile' && (
            <>
              <Form.Group className="mb-3" controlId="formBasicMobile">
                <Form.Label>Mobile Number</Form.Label>
                <InputGroup>
                  <InputGroup.Text><FaMobileAlt /></InputGroup.Text>
                  <Form.Control type="text" placeholder="Enter mobile number" className="custom-input" />
                </InputGroup>
              </Form.Group>
              <Button  onClick={handleResendOtp} >
                send OTP
              </Button>
              <Form.Group className="mb-3" controlId="formBasicMobile">
                <Form.Label>OTP</Form.Label>
                <InputGroup>
                  <InputGroup.Text><FaMobileAlt /></InputGroup.Text>
                  <Form.Control type="text" placeholder="Enter Otp here" className="custom-input" />
                </InputGroup>
              </Form.Group>
              <Button variant="link" onClick={handleResendOtp} >
                Resend OTP
              </Button>
            </>
           
          )}
          {!isLoginMode && (
            <>
              <Form.Group className="mb-3" controlId="formBasicFullName">
                <Form.Label>Full Name</Form.Label>
                <InputGroup>
                  <InputGroup.Text><FaUser /></InputGroup.Text>
                  <Form.Control type="text" placeholder="Enter full name" className="custom-input" />
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <InputGroup>
                  <InputGroup.Text><FaEnvelope /></InputGroup.Text>
                  <Form.Control type="email" placeholder="Enter email" className="custom-input" />
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicMobile">
                <Form.Label>Mobile Number</Form.Label>
                <InputGroup>
                  <InputGroup.Text><FaMobileAlt /></InputGroup.Text>
                  <Form.Control type="text" placeholder="Enter mobile number" className="custom-input" />
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <InputGroup.Text><FaLock /></InputGroup.Text>
                  <Form.Control
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder="Password"
                    className="custom-input"
                  />
                  <InputGroup.Text onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <InputGroup>
                  <InputGroup.Text><FaLock /></InputGroup.Text>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    className="custom-input"
                  />
                 
                </InputGroup>
              </Form.Group>
            </>
          )}
          <Button variant="primary" type="submit" className="w-100">
            {isLoginMode ? 'Login' : 'Register'}
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <Button variant="link" onClick={toggleMode} className="custom-link">
          {isLoginMode ? "Don't have an account? Register" : 'Already have an account? Login'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginRegisterModal;
