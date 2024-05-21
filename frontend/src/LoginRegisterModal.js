import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './LoginRegisterModal.css'; // Create this file for custom styles

const LoginRegisterModal = ({ showModal, handleToggleModal, isLoginMode, toggleMode }) => {
  return (
    <Modal show={showModal} onHide={handleToggleModal} centered>
      <Modal.Header closeButton  className="custom-modal-header">
        <Modal.Title>{isLoginMode ? 'Login' : 'Register'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isLoginMode ? (
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        ) : (
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
       
        <Button variant="link" onClick={toggleMode}>
           {isLoginMode ? "Don't have an account? Register" : 'Already have an account? Login'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginRegisterModal;
