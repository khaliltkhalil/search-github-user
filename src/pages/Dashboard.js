import React from 'react';
import loadingImg from '../images/preloader.gif'; 
import { Navbar, Search, Info, User, Repos } from '../components';
import { GithubContext } from '../context/context';

const Dashboard = () => {
	const { isLoading } = React.useContext(GithubContext);
	if (isLoading) {
		return (
			<main>
				<Navbar />
				<Search />
				<img src={loadingImg} className='loading-img'
					alt='loading'/>
			</main>


		);
	}
	return (
		<main>
			<Navbar />
			<Search />
			<Info />
			<User />
			<Repos />
		</main>
	);
}

export default Dashboard;