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
	IconButton
} from '@material-ui/core';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import ShareIcon from '@material-ui/icons/Share';
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

export default function ViewMyBoards(props) {
	const classes = useStyles();
	const [
		boards,
		setBoards
	] = React.useState([]);
	const [
		isLoading,
		setLoading
	] = React.useState(true);
	const [
		isCopied,
		setCopied
	] = React.useState(false);

	React.useEffect(() => {
		axios
<<<<<<< HEAD
			.get(`https://gsv-bingo.herokuapp.com/api/boards/user/${props.user.email}`)
=======
			.get(`http://gsv-bingo.herokuapp.com/api/boards/user/${props.user.email}`)
>>>>>>> 6107915a8c1e249f93bc5b3f5b334c5657220cbb
			.then((data) => data.data)
			.then((fetchedBoards) => setBoards(fetchedBoards))
			.then(() => setLoading(false));
	}, []);

	const handleStar = (id, star, index) => {
		let items = [
			...boards
		];
		let item = { ...boards[index], starred: !star };
		items[index] = item;
		setBoards(items);
<<<<<<< HEAD
		axios.put(`https://gsv-bingo.herokuapp.com/api/boards/id=${id}&star=${!star}`);
	};

	const copyUrl = (id) => {
		navigator.clipboard.writeText(`https://gsv-bingo.herokuapp.com/boards/play/${id}`).then(() => setCopied(true));
=======
		axios.put(`http://gsv-bingo.herokuapp.com/api/boards/id=${id}&star=${!star}`);
	};

	const copyUrl = (id) => {
		navigator.clipboard.writeText(`http://gsv-bingo.herokuapp.com/boards/play/${id}`).then(() => setCopied(true));
>>>>>>> 6107915a8c1e249f93bc5b3f5b334c5657220cbb
	};

	const getTypeString = (type) => {
		switch (type) {
			case 'bingo_f':
				return 'Standard Bingo Board';
			case 'bingo_nf':
				return 'Bingo Board Without Free Space';
			case 'list':
				return 'List of 10';
			default:
				return 'Board';
		}
	};

	const renderStarredBoards = () => {
		const starredBoards = boards.filter((b) => b.starred === true);
		return (
			<Grid container item xs={9} spacing={3} style={{ marginBottom: '15px' }}>
				{starredBoards.map((board, i) => (
					<Grid item xs={4}>
						<Card variant="outlined">
							<CardContent style={{ height: '8ch' }}>
								<Typography variant="body1" gutterBottom>
									{board.title}
								</Typography>
								<Typography variant="body2" color="textSecondary" gutterBottom>
									{getTypeString(board.type)}
								</Typography>
							</CardContent>
							<CardActions>
								<Button
									variant="contained"
									color="primary"
									onClick={() => (window.location.href = `/boards/play/${board._id}`)}
								>
									Play!
								</Button>
								<IconButton onClick={() => copyUrl(board._id)}>
									<ShareIcon />
								</IconButton>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		);
	};

	const renderCreateBoard = () => (
		<React.Fragment>
			<Grid container item xs={9} spacing={3} style={{ marginBottom: '15px' }}>
				<Typography component="h2" variant="h5" color="inherit" align="center" noWrap>
					Create Your First Board
				</Typography>
			</Grid>
			<Grid container item xs={9} spacing={3} style={{ marginBottom: '15px' }}>
				<p>It looks like you have not created any boards! Click the button below to create your first board.</p>
			</Grid>
			<Grid container item xs={9} spacing={3} style={{ marginBottom: '15px' }}>
				<Button variant="contained" color="primary" onClick={() => (window.location.href = '/boards/create')}>
					Create Board
				</Button>
			</Grid>
		</React.Fragment>
	);

	const renderPastBoards = () => {
		return (
			<Grid container item xs={9} spacing={3}>
				{boards.map((board, i) => (
					<Grid item xs={4}>
						<Card variant="outlined">
							<CardContent style={{ height: '8ch' }}>
								<Typography variant="body1" gutterBottom>
									{board.title}
								</Typography>
								<Typography variant="body2" color="textSecondary" gutterBottom>
									{getTypeString(board.type)}
								</Typography>
							</CardContent>
							<CardActions>
								<Button
									variant="contained"
									color="primary"
									onClick={() => (window.location.href = `/boards/play/${board._id}`)}
								>
									Play!
								</Button>
								<IconButton onClick={() => copyUrl(board._id)}>
									<ShareIcon />
								</IconButton>
								<IconButton onClick={() => handleStar(board._id, board.starred, i)}>
									<StarIcon style={{ fill: board.starred ? 'gold' : '' }} />
								</IconButton>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		);
	};

	const renderBoards = () => {
		return (
			<React.Fragment>
				<Grid container item xs={9} spacing={3} style={{ marginBottom: '15px' }}>
					<Typography component="h2" variant="h5" color="inherit" align="center" noWrap>
						Starred Boards
					</Typography>
				</Grid>
				{renderStarredBoards()}
				<Grid
					container
					item
					xs={9}
					spacing={3}
					style={{ marginBottom: '15px', borderTop: '0.1em dotted grey' }}
				>
					<Typography component="h2" variant="h5" color="inherit" align="center" noWrap>
						Past Boards
					</Typography>
				</Grid>
				{renderPastBoards()}
			</React.Fragment>
		);
	};

	return (
		<div className="ViewMyBoards">
			<Grid container spacing={1} justify="center" style={{ marginTop: '30px' }}>
				{boards.length === 0 ? renderCreateBoard() : renderBoards()}
			</Grid>
			<Snackbar open={isCopied} autoHideDuration={5000} onClose={() => setCopied(false)}>
				<Alert onClose={() => setCopied(false)} severity="success">
					The board URL was successfully copied to your clipboard!
				</Alert>
			</Snackbar>
		</div>
	);
}
