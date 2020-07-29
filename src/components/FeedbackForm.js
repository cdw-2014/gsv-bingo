import React from 'react';
import { TextField, Grid, Button, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { TextareaAutosize } from '@material-ui/core';
const axios = require('axios');

const useStyles = makeStyles((theme) => ({
	root : {
		'& .MuiTextField-root' : {
			margin   : theme.spacing(1),
			width    : '25ch',
			flexGrow : 1
		}
	}
}));

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SuggestionForm(props) {
	const classes = useStyles();
	const [
		type,
		setType
	] = React.useState('Unknown');
	const [
		didSubmit,
		setDidSubmit
	] = React.useState(false);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setDidSubmit(false);
	};

	const handleChange = (event) => {
		setType(event.target.value);
	};

	/*TODO: Check DB for exact copy/similar suggestions
          Check suggestion for inappropriate language
  */
	const handleSubmit = (event) => {
		event.preventDefault();
		event.target[0].value = '';
		setType('General Feedback');
		setDidSubmit(true);
	};

	return (
		<Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
			spacing={2}
			style={{ marginTop: '15px' }}
		>
			<Grid item xs={4}>
				<h3>Give Feedback</h3>
				<p>
					Fill out the form to give feedback or suggestions for this website. You may report bugs, request new
					features, or just give any general feedback on the website. If you would like a follow up on your
					feedback, please enter an email address.
				</p>
			</Grid>
			<form className={classes.root} autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
				<div>
					<Grid container alignItems="center" justify="center" direction="column" spacing={3}>
						<Grid item>
							<TextField required id="subject" label="Required" placeholder="Subject" />
						</Grid>
						<Grid item>
							<TextField
								id="select-type"
								select
								value={type}
								helperText="Type of feedback"
								onChange={handleChange}
							>
								{[
									{ text: 'General Feedback', id: 0 },
									{ text: 'Feature Request', id: 1 },
									{ text: 'Report a Bug', id: 2 },
									{ text: 'Style/Design Suggestion', id: 3 }
								].map((option) => (
									<MenuItem key={option.id} value={option.id}>
										{option.text}
									</MenuItem>
								))}
							</TextField>
						</Grid>
						<TextareaAutosize
							aria-label="empty textarea"
							placeholder="Enter feedback here..."
							style={{ width: '100%' }}
						/>
						<Grid item>
							<TextField id="name" label="Your Name" />
						</Grid>
						<Grid item>
							<TextField id="email" label="Email Address" />
						</Grid>
						<Grid item>
							<Button variant="contained" type="submit" color="primary" id="submit">
								Submit
							</Button>
						</Grid>
					</Grid>
				</div>
			</form>

			<Snackbar open={didSubmit} autoHideDuration={5000} onClose={handleClose}>
				<Alert onClose={handleClose} severity="success">
					Feedback was successfully submitted! Please allow up to 24 hours for a reply!
				</Alert>
			</Snackbar>
		</Grid>
	);
}
