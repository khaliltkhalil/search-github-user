import React from 'react';
import { GithubContext } from '../context/context';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus} from 'react-icons/fi';
import styled from 'styled-components';

const Info = () => {
	const { githubUser } = React.useContext(GithubContext);
	const { public_repos, followers, following, public_gists } = githubUser;
	const items = [
		{
			id: 1,
			icon: <GoRepo className='icon'/>,
			label: 'repos',
			value: public_repos,
			color: 'pink',
		},
		{
			id: 2,
			icon: <FiUsers className='icon'/>,
			label: 'followers',
			value: followers,
			color: 'green'
		},
		{
			id: 3,
			icon: <FiUserPlus className='icon'/>,
			label: 'following',
			value: following,
			color: 'purple'
		},
		{
			id: 4,
			icon: <GoGist className='icon'/>,
			label: 'gists',
			value: public_gists,
			color: 'yellow'
		}
	];
	return (
		<section className='section'>
			<Wrapper>
				{
					items.map((item) => {
							return <Item key={item.id} {...item}/>;
						}
					)
				}
			</Wrapper>
		</section>
		
	);
}


const Wrapper = styled.section`
		display: flex;
		justify-content: space-between;

		.item {
			display: flex;
			background-color: white;
			width: 23%;
			align-items: center;
			border-radius: 0.2rem;
			box-shadow: var(--box-shadow);
			padding: 8px;
		}
		.icon-container {
			width: 3rem;
			height: 3rem;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 50%;
			margin-right: 10px;
		}
		.info {
			margin-top: 4px
		}
		.info h3 {
			font-size: 1rem;
		}
		.info p {
			font-size: 0.75rem;
			text-transform: capitalize;
			color: grey;
		}

		.pink {
			background: #ffe0f0;
			color: #da4a91;
		}
		.green {
			background: var(--clr-primary-10);
			color: var(--clr-primary-5);
		}
		.purple {
			background: #e6e6ff;
			color: #5d55fa;
		}
		.yellow {
			background: #fffbea;
			color: #f0b429;
		}

		@media screen and (max-width: 700px) {
			.icon-container {
				width: 1rem;
				height: 1rem;
			}

			.info h3 {
				font-size: 0.7rem;
		}
		.info p {
			font-size: 0.5rem;
			text-transform: capitalize;
			color: grey;
		}
		}

	`;


const Item = ({ icon, label, value, color }) => {
		return (
			<div className='item'>
				<div className={`${color} icon-container`}>{icon}</div>
				<div className='info'>
					<h3>{value}</h3>
					<p>{label}</p>
				</div>
			</div>
		);
	}

export default Info;