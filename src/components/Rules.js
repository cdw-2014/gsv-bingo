import React from 'react';
import { Grid } from '@material-ui/core';

export default function Rules(props) {
	return (
		<div className="About">
			<Grid container direction="colummn" justify="center" alignItems="center">
				<Grid container item xs={6} direction="colummn" justify="center" alignItems="center">
					<Grid>
						<h3>Suggestion Etiquette</h3>
						<p>
							When submitting suggestions, please follow the guidelines listed below. Users can vote on
							suggestions, and any suggestion with a score below the threshold will be automatically
							deleted. Suggestions will also be periodically monitored, and suggestions not following the
							community guidelines will be manually removed.
						</p>
						<ol>
							<li>
								Avoid offensive words and phrases. This includes any racist slurs, homophobia,
								transphobia, or any other bigotry.
							</li>
							<li>
								While not explicitly encouraged, light swearing is allowed in suggestions. This website
								isn't designed for kids, so as long as you don't use excessive toxic language your
								suggestion will be safe.
							</li>
							<li>
								Going along with the above guideline, feel free to make suggestions that may surpass a
								PG-13 rating, but avoid overly inappropriate language/imagery. Just think whether your
								suggestion would be safe to show on screen if someone was streaming.
							</li>
							<li>
								Make sure that your suggestions are possible. Keep in mind that games are designed to be
								completed in 20 minutes, so maybe test out your suggestions yourself before submitting.
								Also, make sure fill out the difficulty of to suggestion as closely as possible.
							</li>
							<li>Please only use English in your suggestions.</li>
							<li>
								Double check your spelling and grammar before submitting. Also, try to keep the
								suggestions concise so that they will fit on the bingo pieces (less than 15 words).
							</li>
						</ol>
					</Grid>
					<Grid>
						<h3>General Guidelines</h3>
						<ol>
							<li>
								Only sign in with your Google account if you are on a private device. This website does
								not have any permissions to control your Google account, nor does it keep any sensitive
								data. However, due to the way Google authentication works, your email address and name
								may linger in local storage even after you log out.
							</li>
							<li>
								When voting on other people's suggestions, please don't downvote without good reason. As
								mentioned before, the score of a suggestion will determine whether it is deleted, so
								only downvote if the suggestion does not follow the guidelines above.
							</li>
							<li>
								Don't abuse the suggestion/feedback form. If you found a bug, have any suggestions on
								how to improve the website, or have any general feedback that you would like to share,
								please do. However, the form sends an email so try not to spam my inbox :)
							</li>
						</ol>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}
