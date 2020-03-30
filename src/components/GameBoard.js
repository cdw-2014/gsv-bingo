import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import axios from 'axios';

function BingoRow() {}

export default function GameBoard(props) {
	const { gameId } = props.match.params;
	const [
		state,
		setState
	] = React.useState({
		board : null
	});

	React.useEffect(() => {
		axios
			.get(`http://localhost:3001/api/boards/${gameId}`)
			.then((data) => data.data)
			.then((board) => {
				setState({ ...state, board: board });
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<Grid container xs={12} justify="center" alignItems="center" direction="row">
			{state.board.type in
			[
				'bingo_f',
				'bingo_nf'
			] ? (
				<BingoBoard board={state.board} />
			) : (
				<ListBoard board={state.board} />
			)}
		</Grid>
	);
}

GameBoard.propTypes = {
	gameId : PropTypes.string
};
