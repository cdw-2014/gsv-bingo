import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ListBoard from './ListBoard';
import BingoBoard from './BingoBoard';
import CountdownTimer from './CountdownTimer';
import axios from 'axios';

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

	React.useEffect(() => {
		axios
			.get(`http://localhost:3001/api/boards/${gameId}`)
			.then((data) => data.data[0])
			.then((board) => {
				setState({ ...state, board: board, didMount: true });
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<Grid container item xs={12} justify="center" alignItems="center" direction="column" spacing={2}>
			{state.didMount &&
			[
				'bingo_f',
				'bingo_nf'
			].includes(state.board.type) ? (
				<BingoBoard {...state.board} />
			) : (
				state.didMount && <ListBoard {...state.board} />
			)}
			<CountdownTimer />
		</Grid>
	);
}

GameBoard.propTypes = {
	gameId : PropTypes.string
};
