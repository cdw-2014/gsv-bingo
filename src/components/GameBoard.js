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
		board       : null,
		didMount    : false,
		isPlaying   : false,
		timeStarted : new Date().getTime()
	});
	const [
		timeLeft,
		setTimeLeft
	] = React.useState({
		minutes : 20,
		seconds : 0
	});

	React.useEffect(() => {
		axios
			.get(`http://localhost:3001/api/boards/${gameId}`)
			.then((data) => data.data)
			.then((board) => {
				setState({ ...state, board: board, didMount: true });
			})
			.catch((err) => {
				console.error(err);
			});
		setInterval(() => {
			const timer = updateTime();
			setTimeLeft({ minutes: timer.minutes, seconds: timer.seconds });
		}, 1000);
	}, []);

	const updateTime = () => {
		const currentTime = new Date().getTime();
		const difference = currentTime - state.timeStarted;
		const minutesPassed = Math.floor(difference / 60000);
		const secondsPassed = Math.floor((difference % 60000) / 1000);
		return { minutes: 19 - minutesPassed, seconds: 59 - secondsPassed };
	};

	return (
		<Grid container xs={12} justify="center" alignItems="center" direction="row">
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
			<Button
				variant="contained"
				color={state.isPlaying === true ? 'secondary' : 'primary'}
				onClick={(e) => setState({ ...state, isPlaying: !state.isPlaying })}
			>
				{state.isPlaying === true ? 'Finished' : 'Start'}
			</Button>
			<CountdownTimer minutes={timeLeft.minutes} seconds={timeLeft.seconds} />
		</Grid>
	);
}

GameBoard.propTypes = {
	gameId : PropTypes.string
};
