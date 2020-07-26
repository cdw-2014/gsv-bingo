import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MainFeaturedContent from './MainFeaturedContent';
import HomeNavigationOption from './HomeNavigationOption';

const useStyles = makeStyles((theme) => ({
	mainGrid : {
		marginTop : theme.spacing(3)
	}
}));

const sections = [
	// { title: '1', url: '#' },
	// { title: '2', url: '#' },
	// { title: '3', url: '#' },
	// { title: '4', url: '#' },
	// { title: '5', url: '#' },
	// { title: '6', url: '#' },
	// { title: '7', url: '#' },
	// { title: '8', url: '#' },
	// { title: '9', url: '#' },
	// { title: '0', url: '#' }
];

const mainFeaturedContent = {
	title       : 'Welcome',
	description : 'Choose an option below to get started',
	image       : 'https://source.unsplash.com/random/?map',
	imgText     : 'map image from unsplash.com'
};

const navigationOptions = [
	{
		title       : 'Suggestions',
		description : 'Create and manage submitted game piece suggestions',
		image       : `${process.env.PUBLIC_URL}/suggestion.jpg`,
		imageText   : 'Image Text',
		options     : [
			{ title: 'Submit a New Suggestion', link: '/suggestions/submit' },
			{ title: '[COMING SOON] View All Suggested Pieces', link: '/' },
			{ title: '[COMING SOON] Manage Your Suggestions', link: '/' }
		]
	},
	{
		title       : 'Game Board',
		description : 'Create new or load existing bingo boards',
		image       : `${process.env.PUBLIC_URL}/map.jpg`,
		imageText   : 'Image Text',
		options     : [
			{ title: 'Create a New Board', link: '/boards/create' },
			{ title: '[COMING SOON] View All Boards', link: '/' },
			{ title: '[COMING SOON] Manage Your Boards', link: '/' }
		]
	}
];

export default function Home() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="lg">
				<main>
					<MainFeaturedContent post={mainFeaturedContent} />
					<Grid container spacing={4}>
						{navigationOptions.map((post) => <HomeNavigationOption key={post.title} post={post} />)}
					</Grid>
				</main>
			</Container>
		</React.Fragment>
	);
}
