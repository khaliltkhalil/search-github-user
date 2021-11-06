import React from 'react';
import styled from 'styled-components';
import {GithubContext} from '../context/context';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';

const Card = () => {
	const{ githubUser } = React.useContext(GithubContext);
	const {
		avatar_url,
		html_url,
		name,
		company,
		blog,
		bio,
		location,
		twitter_username
	} = githubUser;
	console.log(avatar_url);
	return (
		<Wrapper>
			<header>
				<img src={avatar_url} alt={name}/>
				<div>
					<h4>{name}</h4>
					<p>@{twitter_username}</p>
				</div>
				<a href={html_url}>follow</a>
			</header>
			<p className='bio'>{bio}</p>
			<div className='links'>
				<p>
					<MdBusiness/>{company}
				</p>
				<p>
					<MdLocationOn/>{location}
				</p>
				<a href={`https://${blog}`}>
					<MdLink/><p>{blog}</p>
				</a>
			</div>
			
		</Wrapper>
	);

};

const Wrapper = styled.article`
	background: white;
	width: 45%;
	top: 20px;

	border-top-right-radius: 0.2rem;
  	border-bottom-left-radius: 0.2rem;
  	border-bottom-right-radius: 0.2rem;
	box-shadow: var(--box-shadow);
	position: relative;
	&::before {
			content: 'user';
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
	header {
		display: flex;
		img {
			width: 75px;
			height: auto;
			border-radius: 50%;
			padding: 10px;
			margin-left: 10px

		}
		div {
			margin-left: 10px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			font-size: 0.75rem;
		}
		a {
			height: 1.5rem;
			font-size: 0.8rem;
			text-transform: capitalize;
			text-decoration: none;
			margin: auto 10px auto auto;
			padding: 3px 5px;
			color: var(--clr-primary-5);
			border: 1px solid var(--clr-primary-5);
			border-radius: 1.4rem;
			&:hover {
				background: var(--clr-primary-5);
       		 	color: var(--clr-white);
			}
		}

	}
	.bio {
		padding-left: 20px;
		margin-bottom: 10px;
		font-size: 0.8rem;
	}

	.links {
		padding-left: 20px;
		padding-bottom: 10px;
		font-size: 0.8rem;
		p {
			svg {
				margin-right: 5px;
			}
		}
		a {
			display: flex;
			color: var(--clr-primary-5);
			text-decoration: none;
			padding-bottom: 5px;
			svg {
				margin-right: 5px;
			}
			P {
				padding: 0px 0;
			}
		}
	}

	@media screen and (max-width: 800px) {
		margin-bottom: 40px;
		width: 80%;
	}

`;

export default Card;
