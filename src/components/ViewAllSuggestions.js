import React from 'react';
import {
	TextField,
	Grid,
	Card,
	Button,
	FormControl,
	FormControlLabel,
	RadioGroup,
	Radio,
	Checkbox,
	Typography,
	CardContent,
	CardActions,
	IconButton,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
	MenuItem
} from '@material-ui/core';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import StarIcon from '@material-ui/icons/Star';
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

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function ViewAllSuggestions(props) {
	const classes = useStyles();
	const { user } = props;
	const [
		pageInfo,
		setPageInfo
	] = React.useState({ page: 1, max: 1 });
	const [
		suggestions,
		setSuggestions
	] = React.useState([]);
	const [
		userVotes,
		setUserVotes
	] = React.useState([]);
	const [
		isLoading,
		setLoading
	] = React.useState(true);
	const [
		isReported,
		setReported
	] = React.useState(false);
	const [
		reporting,
		setReporting
	] = React.useState({});
	const [
		reason,
		setReason
	] = React.useState(null);

	React.useEffect(
		() => {
			axios
				.get(`https://gsv-bingo.herokuapp.com/api/suggestions/page=${pageInfo.page}&num=32`)
				.then((data) => data.data)
				.then((fetchedSuggestions) => {
					console.log(fetchedSuggestions);
					setPageInfo({ ...pageInfo, max: fetchedSuggestions.maxPages });
					setSuggestions(fetchedSuggestions.suggestions);
					let _userVotes = [];
					fetchedSuggestions.suggestions.forEach((suggestion) => {
						const userVoteArray = suggestion.votes.filter((v) => v.email === user.email);
						if (userVoteArray.length) {
							_userVotes.push(userVoteArray[0]);
						} else {
							_userVotes.push({ email: user.email, vote: 0 });
						}
					});
					setUserVotes(_userVotes);
				})
				.then(() => setLoading(false));
		},
		[
			pageInfo.page
		]
	);

	const handleVote = (id, vote, index) => {
		if (user.email === null) {
			return;
		}
		let items = [
			...userVotes
		];
		if (items[index].score === vote) {
			items[index] = {
				email : user.email,
				score : 0
			};
		} else {
			items[index] = {
				email : user.email,
				score : vote
			};
		}
		setUserVotes(items);
		let newVotes = votesToString(suggestions[index].votes, items[index]);
		axios.put(`https://gsv-bingo.herokuapp.com/api/suggestions/id=${id}&votes=${newVotes}`);
	};

	const votesToString = (votes, vote) => {
		let found = false;
		votes.forEach((v, i) => {
			if (v.email === user.email) {
				found = true;
				if (v.score === vote.score) {
					votes[i].score = 0;
				} else {
					votes[i] = vote;
				}
			}
		});
		if (!found) {
			votes.push(vote);
		}
		console.log('after', votes);
		let str = '';
		votes.forEach((v) => {
			str += v.email;
			str += ',';
			str += v.score;
			str += '--delim--';
		});
		str = str.slice(0, -3);
		return str;
	};

	const votesFromString = (str) => {
		let data = str.split('--delim--');
		console.log('DATA:', data);
		let votes = [];
		data.forEach((v) => {
			console.log('v:', v);
			const voteData = v.split(',');
			votes.push({ email: voteData[0], score: parseInt(voteData[1]) });
		});
		return votes;
	};

	const getVoteColor = (i, icon) => {
		let color = 'default';
		if (userVotes[i]) {
			if (userVotes[i].score === 1 && icon === 1) {
				color = 'primary';
			} else if (userVotes[i].score === -1 && icon === -1) {
				color = 'secondary';
			}
		}
		return color;
	};

	const getScore = (votes) => {
		let score = 0;
		votes.forEach((vote) => (score += vote.score));
		return score;
	};

	const handlePagation = (x) => {
		console.log(isLoading);
		setLoading(true);
		if (!isLoading) {
			setPageInfo({ ...pageInfo, page: pageInfo.page + x });
		}
	};

	const renderPagation = () => (
		<Grid container item xs={9} justify="space-between" spacing={3}>
			<Grid item>
				<Button disabled={pageInfo.page === 1} onClick={() => handlePagation(-1)}>
					{'< Back'}
				</Button>
			</Grid>
			<Grid item>
				<Typography variant="body1" gutterBottom>
					Page {pageInfo.page} / {pageInfo.max}
				</Typography>
			</Grid>
			<Grid item>
				<Button disabled={pageInfo.page === pageInfo.max} onClick={() => handlePagation(1)}>
					{'Next >'}
				</Button>
			</Grid>
		</Grid>
	);

	const renderSuggestions = () => {
		return (
			<React.Fragment>
				<Grid container item xs={9} spacing={3} style={{ marginBottom: '15px' }}>
					<Typography component="h2" variant="h5" color="inherit" align="center" noWrap>
						Recent Suggestions
					</Typography>
				</Grid>
				{renderPagation()}
				<Grid container item xs={9} spacing={3}>
					{suggestions.map((suggestion, i) => (
						<Grid item xs={3}>
							<Card variant="outlined">
								<CardContent style={{ height: '8ch' }}>
									<Typography variant="body1" gutterBottom>
										{suggestion.suggestion}
									</Typography>
									<Typography noWrap variant="body2" color="textSecondary" gutterBottom>
										By {suggestion.name ? suggestion.name : 'Anonymous'}
									</Typography>
									<Typography variant="body2" color="textSecondary" gutterBottom>
										Difficulty: {suggestion.difficulty}
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										disabled={!user.email}
										variant="outlined"
										size="small"
										color="secondary"
										onClick={() => setReporting(suggestion)}
									>
										Report
									</Button>
									<IconButton
										disabled={!user.email}
										onClick={() => handleVote(suggestion._id, 1, i)}
										color={getVoteColor(i, 1)}
									>
										<ThumbUp />
									</IconButton>
									{getScore(suggestion.votes)}
									<IconButton
										disabled={!user.email}
										onClick={() => handleVote(suggestion._id, -1, i)}
										color={getVoteColor(i, -1)}
									>
										<ThumbDown />
									</IconButton>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
				{renderPagation()}
			</React.Fragment>
		);
	};

	return (
		<div className="ViewMyBoards">
			<Grid container spacing={1} justify="center" style={{ marginTop: '30px' }}>
				{suggestions.length !== 0 ? renderSuggestions() : <div>Loading...</div>}
			</Grid>
			<Dialog title="report-modal" open={reporting.suggestion} modal={true}>
				<DialogTitle>Reporting a Suggestion</DialogTitle>
				<DialogContent>
					<Card style={{ backgroundColor: '#f3b6a8' }} variant="outlined">
						<CardContent style={{ height: '8ch' }}>
							<Typography variant="body1" gutterBottom>
								{reporting.suggestion}
							</Typography>
							<Typography noWrap variant="body2" color="textSecondary" gutterBottom>
								By {reporting.name ? reporting.name : 'Anonymous'}
							</Typography>
							<Typography variant="body2" color="textSecondary" gutterBottom>
								Difficulty: {reporting.difficulty}
							</Typography>
						</CardContent>
					</Card>
					<Typography gutterBottom>Select a reason for reporting the above suggestion:</Typography>
					<form
						autoComplete="off"
						onSubmit={(e) => {
							e.preventDefault();
							axios.post(`https://gsv-bingo.herokuapp.com/api/mail`, {
								subject : `[Report] GSV-Bingo Report`,
								text    : `Suggestion:\n${reporting.suggestion}\n\nBy: ${reporting.name}\n\nDifficulty: ${reporting.difficulty}\n\nReporter: ${user.name} - ${user.email}\nReason:${reason}`
							});
							setReporting({});
							setReported(true);
						}}
					>
						<TextField
							id="select-type"
							select
							required
							fullWidth
							value={reason}
							helperText="Report Reason"
							onChange={(event) => setReason(event.target.value)}
						>
							{[
								{ text: 'Racism or Other Bigotry', id: 0 },
								{ text: 'Vulgar Language', id: 1 },
								{ text: 'Duplicate Suggestion', id: 2 }
							].map((option) => (
								<MenuItem key={option.id} value={option.text}>
									{option.text}
								</MenuItem>
							))}
						</TextField>
						<Button type="submit" color="secondary">
							Report
						</Button>
						<Button onClick={() => setReporting({})} color="primary" autoFocus>
							Cancel
						</Button>
					</form>
				</DialogContent>
				{/* <DialogActions>
					<Button
						type="submit"
						onClick={() => {
							setReporting({});
							setReported(true);
						}}
						color="secondary"
					>
						Report
					</Button>
					<Button onClick={() => setReporting({})} color="primary" autoFocus>
						Cancel
					</Button>
				</DialogActions> */}
			</Dialog>
			<Snackbar open={isReported} autoHideDuration={5000} onClose={() => setReported(false)}>
				<Alert onClose={() => setReported(false)} severity="success">
					Thank you for helping keep the site clean!
				</Alert>
			</Snackbar>
		</div>
	);
}
