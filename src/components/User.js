import React from 'react';
import Card from './Card.js';
import Followers from './Followers.js';
import styled from 'styled-components';

const User = () => {
	return (
		<Wrapper className='section'>
			<Card/>
			<Followers/>
		</Wrapper>
	);

}

const Wrapper = styled.section`
	display: flex;
	justify-content: space-between;
	margin-bottom: 40px;
	@media screen and (max-width: 800px) {
		flex-direction: column;
		align-items: center;

	}

`;

export default User;