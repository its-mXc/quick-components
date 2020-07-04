import React,  {useState} from 'react';
import {Form, Button} from 'react-bootstrap'

const LoginForm = ({emailLabel, emailPlaceholder, passwordLabel, passwordPlaceholder, buttonText, handleEmailChange, handlePasswordChange, handleLogin}) => {
  
  return (
    <Form onSubmit={handleLogin} className="w-25 m-3">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>{emailLabel || "Email address"}</Form.Label>
        <Form.Control type="email" placeholder={emailPlaceholder || "Enter email"} onChange={handleEmailChange} />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>{passwordLabel || "Password"}</Form.Label>
        <Form.Control type="password" placeholder={passwordPlaceholder || "Password"} onChange={handlePasswordChange} />
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        {buttonText || "Login"}
      </Button>
    </Form>
  )
}

export default LoginForm