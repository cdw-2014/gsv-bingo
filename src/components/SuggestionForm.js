import React from 'react';
import { TextField, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const axios = require('axios');

const useStyles = makeStyles((theme) => ({
	root : {
		'& .MuiTextField-root' : {
			margin : theme.spacing(1),
			width  : '25ch'
		}
	}
}));

export default function SuggestionForm() {
	const classes = useStyles();
	// const [
	// 	amount,
	// 	setAmount
	// ] = React.useState(1);

	// const handleChange = (event) => {
	// 	setAmount(event.target.value);
	// };

	/*TODO: Check DB for exact copy/similar suggestions
          Check suggestion for inappropriate language
  */
	const handleSubmit = (event) => {
		// event.preventDefault();
		console.log(event.target[1].value, event.target[0].value);
		axios.post('http://localhost:3001/api/suggestions', {
			name       : event.target[1].value,
			suggestion : event.target[0].value
		});
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
			<Grid item xs={8}>
				<h3>Add a Bingo Piece</h3>
				<p>
					Fill out the form to create a possible bingo piece that others can look for when playing Google
					Steet View Bingo!
				</p>
			</Grid>
			<form className={classes.root} autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
				<div>
					<Grid container alignItems="center" justify="center" direction="column" spacing={3}>
						<Grid item>
							<TextField
								required
								id="suggestion"
								label="Required"
								placeholder="Suggestion"
								fullWidth={true}
							/>
						</Grid>
						{/* <Grid item>
                <TextField
                  id="select-amount"
                  select
                  label="How many need to be found?"
                  value={amount}
                  onChange={handleChange}
                >
                  {[1,2,3,4,5,6,7,8,9,10].map(option => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid> */}
						<Grid item>
							<TextField id="name" label="Your Name" />
						</Grid>
						<Grid item>
							<Button variant="contained" type="submit" color="primary" id="submit">
								Submit
							</Button>
						</Grid>
					</Grid>
				</div>
			</form>
		</Grid>
	);
}
