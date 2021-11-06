import React from 'react';
import loadingImg from '../images/preloader.gif';
import styled from 'styled-components';
import { useAuth0 } from "@auth0/auth0-react";

const AuthWrapper= ( { children }) => {
	const { isLoading, error} = useAuth0();
	if (isLoading) {
		return (
			<Wrapper>
				<img src={loadingImg} alt='spinner'/>
			</Wrapper>
		);
		
	}

	if (error) {
		return <Wrapper><h1>{error.message}</h1></Wrapper>
	}

	return <>{children}</>;
}

const Wrapper = styled.section`
	display: flex;
	justify-content: center;
	margin-top: 50px;
	@media (max-width: 600px){
		img {
			width: 100px;
			height: 100px;
		}
	}

`;

export default AuthWrapper;