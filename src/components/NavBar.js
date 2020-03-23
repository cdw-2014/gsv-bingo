import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
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

export default function NavBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						Google Street View Bingo
					</Typography>
					<Button>Add Suggestion</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
