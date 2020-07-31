import React from 'react';
import { Grid } from '@material-ui/core';

export default function ContactMe(props) {
	return (
		<div className="About">
			<Grid container direction="colummn" justify="center" alignItems="center">
				<Grid container item xs={6} direction="colummn" justify="center" alignItems="center">
					<Grid>
						<h3>Contact Me</h3>
						<p>
							My name is CJ, and I am studying Systems Analysis & Design at Purdue University. In my free
							time I like to code and make random stuff. Right now, Google Street View Bingo is one of my
							few side projects I am working on in rotation, and I am hoping to release new updates to the
							website every couple months. If you have any suggestions or feedback on the website, please
							use the form which can be found in the menu bar at the top of the page or{' '}
							<a href="/feedback">here</a>. For personal or business inquiries, you may contact me through
							the platforms below:
						</p>
						<ul>
							<li>Reddit - cdw2014_</li>
							<li>Discord - cdw2014#3949</li>
							<li>Email - cdw2014@gmail.com</li>
						</ul>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}
