import React from 'react';
import styled from 'styled-components';
import loginImg from '../images/login-img.svg';
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
	const { loginWithRedirect } = useAuth0();
	return (
		<Wrapper>
			<div className='container'>
				<img src={loginImg} alt='login'/>
				<h1>github users</h1>
				<button className='btn' onClick={loginWithRedirect}>login / sign up</button>
			</div>
			
		</Wrapper>
	);
}

const Wrapper = styled.section`
	
	.container {
		width: 90vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 20px auto;
		max-width: 600px;
		text-transform: capitalize;


	}
	img {
		width: 100%;
		height: auto;
	}
	h1 {
		font-size: 5rem;
		text-align: center;
		font-weight: 500;
		margin-bottom: 20px
	}
	@media screen and (max-width: 600px) {
		h1 {
			font-size: 3rem;
		}
	}	
`

export default Login;