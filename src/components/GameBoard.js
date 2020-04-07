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

	React.useEffect(() => {
		axios
			.get(`/api/boards/${gameId}`)
			.then((data) => data.data[0])
			.then((board) => {
				let idsToString = '';
				board.pieces.forEach((id) => (idsToString += id + ','));
				idsToString = idsToString.substr(0, idsToString.length - 1);
				axios.get(`/api/suggestions/many/${idsToString}`).then((data) => {
					const pieces = data.data;
					const res = {
						_id    : board._id,
						type   : board.type,
						title  : board.title,
						pieces : pieces
					};
					setState({ ...state, board: res, didMount: true });
				});
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<Grid container item xs={12} justify="center" alignItems="center" direction="column" spacing={2}>
			{state.didMount && console.log(state.board) && state.board.type === 'list' ? (
				<ListBoard {...state.board} />
			) : (
				state.didMount && <BingoBoard {...state.board} />
			)}
			<CountdownTimer />
		</Grid>
	);
}

GameBoard.propTypes = {
	gameId : PropTypes.string
};
