import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Error = () => {
	return (
		<Wrapper>
			<div>
				<h1>404</h1>
				<h3>sorry, the page you tried cannot be found</h3>
				<Link to='/' className='btn'>
					back home
				</Link>
			</div>	
		</Wrapper>
	);
}

const Wrapper = styled.section`
	background: var(--clr-background);
	display: flex;
	flex-direction: column;
	height: 100vh;
	align-items: center;
	text-align: center;
	text-transform: capitalize;e;
	h1 {
		font-size: 10rem;
		color: hsl(180, 100%, 5%)

	}
	h3 {
		color: var(--clr-text-grey);
		margin-bottom: 1rem;
	}
	

`

export default Error;