import React from 'react';
import styled from 'styled-components';
import { Pie3D, Doughnut2d, Column3D, Bar3D } from './charts';
import { GithubContext } from '../context/context';

// STEP 2 - Chart Data


const Repos = () => {
	const { repos } = React.useContext(GithubContext);
	//console.log(repos);
	const languages = repos.reduce((total, item) => {
		const { language, stargazers_count } = item; 

		if (!language) return total;
		if (!total[language]) {
			total[language] = { label: language, value: 1, stars: stargazers_count};
		} else {
			total[language] = {
				...total[language],
				value: total[language].value + 1,
				stars: total[language].stars + stargazers_count
			}
		}
		return total;
	}, {});
	
	const mostUsed = Object.values(languages)
		.sort((a, b) => {
			return b.value - a.value;
		})
		.slice(0, 5);

	const mostStars = Object.values(languages)
		.sort((a, b) => {
			return b.stars - a.stars;
		})
		.map((item) => {
			return {
				...item,
				value: item.stars
			}
		})
		.slice(0, 5);

	let { stars, forks } = repos.reduce(
		(total, item) => {
			const { stargazers_count, name, forks } = item;

			total.stars[stargazers_count] = { 
				label: name,
				value: stargazers_count
			}
			total.forks[forks] = { 
				label: name,
				value: forks
			}

			return total;
		},
		{
			stars: {},
			forks: {}
		}
	);

	stars = Object.values(stars).slice(-5).reverse();
	forks = Object.values(forks).slice(-5).reverse();

	return (
		
			<Wrapper className='section'>
				
				<Pie3D data={mostUsed}/>
				<Column3D data={stars}/>
				<Doughnut2d data={mostStars}/>
				<Bar3D data={forks}/>
			</Wrapper>
			
	
	);

}

const Wrapper = styled.section`
	display: grid;
	grid-template-columns: 2fr 3fr;
	gap: 20px;
	div {
		width: 100%;
	}
	
	.fusioncharts-container {
	    width: 100% ;
	}
	svg {
	    width: 100% ;
	    border-radius: var(--radius);
	}
	@media (max-width: 900px) {
		grid-template-columns: 1fr;
		justify-items: center;
		div {
		width: 90%;
	}
	
	
	}
`;

export default Repos;