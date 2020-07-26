import React from 'react';
import { Grid } from '@material-ui/core';

export default function About(props) {
	return (
		<div className="About">
			<Grid container direction="colummn" justify="center" alignItems="center">
				<Grid container item xs={6} direction="colummn" justify="center" alignItems="center">
					<Grid>
						<h3>Origin of Google Street View Bingo</h3>
						<p>
							This application was inspired by the YouTube channel GeoWizard which uploads geography based
							videos such as GeoGuessr gameplay, Sporcle quizzes, and real life adventure vlogs. A viewer
							by the name of Chris Giles suggested a game where you use Google Street View to find 10
							specific items from a list within a time limit which can be seen in the videos below.
						</p>
						<iframe
							width="448"
							height="252"
							src="https://www.youtube.com/embed/videoseries?list=PL_japiE6QKWoGGZw1t2cebElAki6JU1ik"
							frameborder="0"
							allow="autoplay; encrypted-media"
							allowfullscreen
						/>
					</Grid>
					<Grid>
						<h3>How to Play</h3>
						<p>
							To play Google Street View Bingo on this site, you may choose to create a traditional 10
							item list as seen in GeoWizard's videos, or you can create an actual 5x5 bingo board. While
							there are no strict rules of how to play, typically you will want to attempt to find all 10
							items on the list or 5 in a row from the bingo board.
						</p>
						<p>
							The board pieces are 100% crowdsourced by the users of this website. While I will
							occasionally add suggestions from the YouTube comment sections manually to the database, you
							can submit your own by clicking "Submit a New Suggesiton" from the Suggestions dropdown on
							the homepage! Likewise, to create a board, click the "Create a New Board" option from the
							Game Board dropdown on the homepage.
						</p>
						<p>
							New features are currently being added to the website to make it easier to keep track of and
							manage your suggestions and game boards. While it is not necessary to use the website,
							signing in with Google on top right corner of the screen will allow you to use new features
							as they are added. Note: No personal information other than your name and email is collected
							when you link your Google account, and no unsolicited emails will be sent.
						</p>
					</Grid>
					<Grid>
						<h3>Disclaimer</h3>
						<p>
							Neither this website nor I have any affiliation with the GeoWizard YouTube channel. To help
							support the development of this website, you may{' '}
							<a href="https://www.paypal.com/paypalme/cdw2014">donate here</a>.
						</p>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}
