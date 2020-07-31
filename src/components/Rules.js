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
								Avoid offensive words and phrases. This includes any racism, homophobia, transphobia, or
								any other bigotry.
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
							<li>
								Before adding suggestions, consider browsing through the existing suggestions to see if
								your ideas are already in the database. If you want to avoid spoilers, you do not need
								to do this, but users may report duplicate suggestions which may be deleted.
							</li>
						</ol>
					</Grid>
					<Grid>
						<h3>Reporting a Suggestion</h3>
						<p>
							When viewing all suggestions, feel free to downvote and upvote suggestions as you deem fit.
							If a suggestion's score goes below a certain threshold, it feel be removed. Any suggestion
							that does not adhere to the suggestion etiquette above is fair game for downvoting. However,
							only use the Report button for the following reasons:
						</p>
						<ul>
							<li>Suggestion is racist, homophobic, transphobic, etc.</li>
							<li>Suggestion is extremely vulgar and makes you feel uncomfortable using the website.</li>
							<li>Suggestion is a duplicate.</li>
						</ul>
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
								Don't abuse the suggestion/feedback form. If you found a bug, have any suggestions on
								how to improve the website, or have any general feedback that you would like to share,
								please do. However, the form sends an email so try not to spam my inbox :)
							</li>
							<li>
								If you enjoy the website, consider contributing by leaving your own suggestions! There
								are over a thousand unique boards so far, but far fewer suggestions. To keep the website
								enjoyable for yourself and others, leave a suggestion or two every time you play a round
								of bingo!
							</li>
						</ol>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}
