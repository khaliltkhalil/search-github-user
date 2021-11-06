import React, { useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { GithubContext } from '../context/context';

const Search = () => {
	const [user, setUser] = useState('');
	const { requests, error, getGithubUser, isLoading } = React.useContext(GithubContext);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (user) {
			getGithubUser(user);
		}
	}
	return (
			<Wrapper className='section'>
				{error.show && 
					<ErrorWrapper>
						<p>{error.msg}</p>
					</ErrorWrapper>
				}
				<form onSubmit={handleSubmit} className='search-form' >
					<div>
						<MdSearch/>
						<input 
							type='text' 
							placeholder='enter github user'
							value={user} 
							onChange={(e) => setUser(e.target.value)}
						/>
						{requests < 60 && !isLoading && 
							<button 
							type='submit' 
							className='btn'>search
							</button>
						}
						
					</div>
				</form>	
				<h3>Requests : {requests} / 60</h3>	
			</Wrapper>
			

	);

}

const Wrapper = styled.section`
	position:relative;
	display: flex;
	justify-content: space-between;
	margin-top: 20px;

	.search-form {
		background-color: white;
	}

	.search-form {
		width: 78%
	}

	div {
		display: flex;
		justify-content: start;
		align-items: center;
	}
	h3 {
		width: 20%;
		font-size: 1rem;
		color: grey;
		padding: 4px;
	}

	input {
		width: 85%;
		padding: 4px;
		margin: 2px;
		text-transform: capitalize;
		border: none;
	}
	button {
		width: 5rem;
		height: 1.5rem;
		padding: 0;

		text-transform: capitalize;
		margin: 4px;
	}
	svg {
		width: 1.5rem;
		height: 1.5rem;
		margin: 2px;
	}

	@media (max-width: 950px){
		flex-direction: column;
		margin-bottom: 10px;
		.search-form {
			width: 100%;
		}
		h3 {
			width: 40%;
		}
	}

`;

const ErrorWrapper = styled.div`
	position: absolute;
	width: 90vw;
	top: 0;
	left: 0;
	transform: translateY(-110%);
	text-transform: capitalize;

	p {
		color: red;
		letter-spacing: var(--spacing);
	}
`;

export default Search;