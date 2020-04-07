import React from 'react';
import { TextField, Grid, Button, FormControl, FormControlLabel, RadioGroup, Radio, Checkbox } from '@material-ui/core';
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

export default function ViewBoards() {
	const classes = useStyles();
	const [
		state,
		setState
	] = React.useState();

	const redirect = (id) => {
		console.log('test', id);
		window.location.href = `/board/play/${id}`;
		return false;
	};

	return (
		<Grid
			container
			item
			xs={12}
			direction="column"
			justify="space-between"
			alignItems="center"
			spacing={2}
			style={{ marginTop: '15px' }}
			className={classes.root}
		>
			<Grid item xs={12}>
				<h3>View All Boards</h3>
			</Grid>
			<Grid item>
				<form className={classes.root} autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
					<div>
						<Grid item>
							<TextField
								required
								id="name"
								label="Board Name"
								value={state.title}
								onChange={(e) => handleType(e)}
							/>
						</Grid>
						<Grid item>
							<FormControl component="fieldset" name="board-type">
								<RadioGroup onChange={(e) => handleChange(e)} value={state.type}>
									<FormControlLabel value="bingo" control={<Radio />} label="Bingo Board (5x5)" />
									<FormControlLabel value="list" control={<Radio />} label="List of 10 Items" />
								</RadioGroup>
							</FormControl>
						</Grid>
						<Grid item>
							<h5>Additional Settings:</h5>
						</Grid>
						<Grid item>
							<FormControl onChange={(e) => handleCheck(e)} disabled={state.type === 'list'}>
								<FormControlLabel
									label="Use free space in center"
									control={<Checkbox checked={state.isFreeSpace} />}
								/>
							</FormControl>
						</Grid>
					</div>
					<Grid item>
						<Button variant="contained" type="submit" color="primary" id="submit">
							Submit
						</Button>
					</Grid>
				</form>
			</Grid>
		</Grid>
	);
}
