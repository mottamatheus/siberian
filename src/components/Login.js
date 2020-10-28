import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
	const history = useHistory();
	const [ email, setEmail ] = useState('');

	const [ password, setPassword ] = useState('');

	const signIn = (e) => {
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				if (auth) {
					history.push('/');
				}
			})
			.catch((error) => alert(error.message));

		//firebase stuff
	};

	const register = (e) => {
		e.preventDefault();

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				console.log(auth);
				if (auth) {
					history.push('/');
				}
			})
			.catch((error) => alert(error.message));
	};

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
				<h1>Login to Siberian!</h1>

				<form className="login__input">
					<h5>E-mail</h5>
					<input value={email} type="text" onChange={(e) => setEmail(e.target.value)} />

					<h5>Password</h5>
					<input
						value={password}
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button type="submit" onClick={signIn} className="login__button">
						Sign In
					</button>
				</form>
				<button onClick={register} className="login__newAccount">
					Create New Account
				</button>
			</div>
		</div>
	);
}

export default Login;
