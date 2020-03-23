import React from 'react';
import { Grid, Card, CardContent, CardActionArea, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root   : {
		flexGrow : 1
	},
	button : {
		marginRight : theme.spacing(2)
	},
	title  : {
		flexGrow : 1
	}
}));

export default function Home() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
				spacing={3}
				style={{ marginTop: '15px' }}
			>
				<Grid item xs={5}>
					<Card>
						<CardActionArea onClick={() => (window.location.href = '/suggest')}>
							<CardContent>
								<Typography variant="h5">Make A Suggestion</Typography>
								<Typography variant="body1" color="textSecondary">
									Add an item that will be used to generate a Google Street View Board.
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item xs={5}>
					<Card>
						<CardActionArea onClick={() => (window.location.href = '/createboard')}>
							<CardContent>
								<Typography variant="h5">Create a Board</Typography>
								<Typography variant="body1" color="textSecondary">
									Generate a random bingo board from user created suggestions.
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
}
