import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
	return (
		<div className="login">
			<Link className="login__link" to="./">
				<img
					className="login__image"
					src="https://i.imgur.com/nuX8jIF.png"
					alt="siberian logo"
				/>
			</Link>
			<div className="login__container">
				<h1>Sign In</h1>

				<form className="login__input">
					<h5>E-mail</h5>
					<input type="text" />

					<h5>Password</h5>
					<input type="password" />

					<button className="login__button">Sign In</button>
				</form>
				<button className="login__newAccount">Create New Account</button>
			</div>
		</div>
	);
}

export default Login;
