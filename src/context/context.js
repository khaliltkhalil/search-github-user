import React, { useState, useEffect } from 'react';
import mockUser from './mockData/mockUser';
import mockRepos from './mockData/mockRepos';
import mockFollowers from './mockData/mockFollowers';
const GithubContext = React.createContext();
const rootUrl = 'https://api.github.com';

const GithubProvider = ({ children }) => {
	const [githubUser, setGithubUser] = useState(mockUser);
	const [repos, setRepos] = useState(mockRepos);
	const [followers, setFollowers] = useState(mockFollowers);
	// requesr, loading
	const [requests, setRequests] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	// error 
	const [error, setError] = useState({show: false, msg:''});

	// get github user function
	const getGithubUser = async(user) => {
		toggleError();
		setIsLoading(true);
		try {
			const response = await fetch(`${rootUrl}/users/${user}`);
			if (response.status >=200 && response.status < 299) {
				const data = await response.json();
				setGithubUser(data);
				const { login, followers_url } = data;

				// get repos 

				const [repos_data, followers_data] = await Promise.allSettled([
						fetch(`${rootUrl}/users/${login}/repos?per_page=100`)
							.then((res) => res.json()),
						fetch(`${followers_url}?per_page=100`)
							.then((res) => res.json())
					])


				console.log(repos_data, followers_data);
				if (repos_data.status ==='fulfilled') {
					setRepos(repos_data.value);
				}
				if (followers_data.status ==='fulfilled') {
					setFollowers(followers_data.value);
				}

				// fetch(`${rootUrl}/users/${login}/repos?per_page=100`)
				// 	.then((res) => res.json())
				// 	.then((data) => {
				// 		console.log(data);
				// 		setRepos(data);
				// 	})
				// 	.catch(console.log);

				// //get followers
				// fetch(`${followers_url}?per_page=100`)
				// 	.then((res) => res.json())
				// 	.then((data) => {
				// 		//console.log(data);
				// 		setFollowers(data);

				// 	})
				// 	.catch(console.log);

			} else {
				toggleError(true, "user doesn't exist");
			}
			checkRequest();
			setIsLoading(false);
		} catch (e) {
			console.log(e);
		}
	}

	const checkRequest = async() => {
		try {
			const response = await fetch(`${rootUrl}/rate_limit`);
			if(response.status >= 200 && response.status < 299) {
				
				const { rate } = await response.json();
				let { used } = rate;
				setRequests(used);
				if (used == 60 ) {
					//throw an error
					toggleError(true,
						 'sorry, you have exceeded your hourly rate limit');
				}
			} else {
				throw new Error();
			}
		} catch(e) {
			console.log(e);
		}
	}
	function toggleError(show=false, msg='') {
		setError({show, msg});
	}

	useEffect(checkRequest,[]);


	return (
		<GithubContext.Provider 
			value={{ 
				githubUser, 
				repos,
		 		followers, 
		 		requests, 
		 		error, 
		 		getGithubUser,
		 		isLoading}}>
			{children}
		</GithubContext.Provider>

	);
}

export { GithubProvider, GithubContext };