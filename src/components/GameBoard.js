import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import axios from 'axios';
import ListBoard from './ListBoard';
import BingoBoard from './BingoBoard';
import CountdownTimer from './CountdownTimer';

export default function GameBoard(props) {
	const { gameId } = props.match.params;
	const [
		state,
		setState
	] = React.useState({
		board    : null,
		didMount : false
	});
	const [
		timeLeft,
		setTimeLeft
	] = React.useState({
		timeStarted : new Date().getTime(),
		isPlaying   : false,
		minutes     : 20,
		seconds     : 0
	});

	React.useEffect(
		() => {
			axios
				.get(`http://localhost:3001/api/boards/${gameId}`)
				.then((data) => data.data)
				.then((board) => {
					setState({ ...state, board: board, didMount: true });
				})
				.catch((err) => {
					console.error(err);
				});
			let timerInterval = null;
			timerInterval = setTimeout(() => {
				if (timeLeft.isPlaying && (timeLeft.minutes > 0 || timeLeft.seconds > 0)) {
					const timer = updateTime();
					setTimeLeft({ ...timeLeft, minutes: timer.minutes, seconds: timer.seconds });
				}
			}, 1000);
			return () => clearInterval(timerInterval);
		},
		[
			timeLeft
		]
	);

	const updateTime = () => {
		const currentTime = new Date().getTime();
		const difference = (currentTime - timeLeft.timeStarted) / 1000;
		const minutesPassed = Math.floor((difference - 1) / 60);
		const secondsPassed = Math.floor(difference - minutesPassed * 60);
		return { minutes: 19 - minutesPassed, seconds: 60 - secondsPassed };
	};

	const handleClick = (event) => {
		if (timeLeft.isPlaying) {
			setTimeLeft({ ...timeLeft, isPlaying: false });
		} else {
			setTimeLeft({ ...timeLeft, isPlaying: true, timeStarted: new Date().getTime() });
		}
	};

	return (
		<Grid container xs={12} justify="center" alignItems="center" direction="column" spacing={3}>
			{state.didMount &&
			state.board.type in
				[
					'bingo_f',
					'bingo_nf'
				] ? (
				<BingoBoard board={state.board} />
			) : (
				<ListBoard board={state.board} />
			)}
			{timeLeft.isPlaying ? <CountdownTimer minutes={timeLeft.minutes} seconds={timeLeft.seconds} /> : null}
			<Button
				variant="contained"
				color={state.isPlaying === true ? 'secondary' : 'primary'}
				onClick={(e) => handleClick(e)}
			>
				{timeLeft.isPlaying === true ? 'Finished' : 'Start'}
			</Button>
		</Grid>
	);
}

GameBoard.propTypes = {
	gameId : PropTypes.string
};
