import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap'

const SignupForm = ({handleNameChange, handleEmailChange, handlePasswordChange, handleSignup}) => {
	const [name, setName]= useState('')
	const [email, setEmail]= useState('')
	const [password, setPassword]= useState('')
	const [passwordConfirm, setPasswordConfirm]= useState('')

	
	const handlePasswordConfirmChange = (event) => {
		setPasswordConfirm(event.target.value)
	}
	

	let passwordConfirmClasses = "border"

	if(passwordConfirm && password === passwordConfirm) {
		passwordConfirmClasses = "border border-success" 
	}
	else if(passwordConfirm && password !== passwordConfirm) {
		passwordConfirmClasses = "border border-danger" 
	}


	return (
		<Form onSubmit={handleSignup} className="w-25 m-3">

			<Form.Group controlId="formBasicEmail">
				<Form.Label>Name</Form.Label>
				<Form.Control type="text" placeholder="Enter Name" required onChange={handleNameChange} />
			</Form.Group>

			<Form.Group controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="Enter email" required onChange={handleEmailChange} />
				<Form.Text className="text-muted">
				We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>

			<Form.Group controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password" required onChange={handlePasswordChange} />
			</Form.Group>

			<Form.Group controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Retype Password" required onChange={handlePasswordConfirmChange} className={passwordConfirmClasses} />
			</Form.Group>
			<Button variant="primary" type="submit">
				Signup
			</Button>
		</Form>
	)
}

export default Signup