import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
	const {
		isAuthenticated,
		loginWithRedirect,
		logout,
		user
	} = useAuth0();
	return (
		<Wrapper>
			{
				isAuthenticated && 
				<div>
					<img src={user.picture} alt={user.name}/>
					<p>Welcom, <strong>{user.name.toUpperCase()}</strong></p>
				</div>
			}
			{
				isAuthenticated ? 
					<button 
						onClick={() => logout({ returnTo: window.location.origin })}
					>logout
					</button>:
					<button onClick={loginWithRedirect}>login</button>
			}
			
			
		</Wrapper>
	);

}

const Wrapper = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 0px;
	margin-bottom: 40px;

	background-color: white;
	div {
		display: flex;
		align-items: center;
	}
	img {
		width: 2rem;
		height: 2rem;
		margin-right: 10px;
		border-radius: 50%;
	}
	button {
		border: none;
		background-color: transparent;
		color: grey;
		text-transform: capitalize;
		margin-left: 20px;
		cursor: pointer;
		font-size: 1rem;
	}
`;

export default Navbar;