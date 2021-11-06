import React from 'react';
import styled from 'styled-components';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import {GithubContext} from '../context/context';

const Followers = () => {
	const { followers } = React.useContext(GithubContext);
	return (
		<Wrapper>
			<div className='followers'>
				<SimpleBar style={{height: '160px'}}>
				{

					followers.map((follower, index) => {
						const {avatar_url: img, html_url, login} = follower;
						return (
							<article key={index}>
								<img src={img} alt={login}/>
								<div className='follower-info'>
									<h4>{login}</h4>
									<a href={html_url}>{html_url}</a>
								</div>
							</article>	
						);
					})
				}
				</SimpleBar>
			</div>
		</Wrapper>
		
	);
}

const Wrapper = styled.section`
	
	
	width: 45%;
	top: 20px;
	border-top-right-radius: 0.2rem;
  	border-bottom-left-radius: 0.2rem;
  	border-bottom-right-radius: 0.2rem;
	box-shadow: var(--box-shadow);
	position: relative;
	
	.followers {
		background: white;
	&::before {
		content: 'Followers';
		position: absolute;
		top: 0;
		left: 0;
		transform: translateY(-100%);
		color: grey;
		background: white;
		text-transform: capitalize;
		border-top-left-radius: 0.2rem;
		border-top-right-radius: 0.2rem;
		padding: 2px 6px;

	}

	}

	img {
		width: 35px;
		height: 35px;
		border-radius: 50%;
		margin-right: 10px;
		
	}
	article {
		display: flex;
		margin-bottom: 10px;
		margin-top: 10px;
		margin-left: 10px;

	}
	.follower-info {
		display: flex;
		flex-direction: column;
	}
	h4 {
		font-size: 0.8rem;
	}
	a {
		text-decoration: none;
		color: grey;
		font-size: 0.6rem;
	}
	@media screen and (max-width: 800px) {
		
		width: 80%;
	}

	`;

export default Followers;
