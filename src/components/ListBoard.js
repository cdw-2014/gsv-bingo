import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import axios from 'axios';

const useStyles = makeStyles({
	card : {
		display  : 'flex',
		width    : '15%',
		height   : '8ch',
		flexWrap : 1
	}
});

export default function ListBoard(props) {
	const { _id, title, type, suggestion } = props;
	const classes = useStyles();
	const [
		state,
		setState
	] = React.useState({
		didMount : false,
		pieces   : props.pieces
	});

	React.useEffect(() => {
		state.pieces.forEach((piece) => (piece.found = false));
		setState({ ...state, didMount: true });
	}, []);

	const updatePieces = (i) => {
		let updatedPieces = [
			...state.pieces
		];
		let pieceToUpdate = updatedPieces[i];
		pieceToUpdate.found = !pieceToUpdate.found;
		setState({ ...state, pieces: updatedPieces });
	};

	const renderListItem = (piece, i) => {
		if (i % 2 === 0) {
			return (
				<Grid container item xs={10} justify="space-around" alignItems="center" direction="row" spaing={2}>
					<p>test</p>
				</Grid>
			);
		}
	};

	return (
		<React.Fragment>
			<h3>{props.title}</h3>
			{state.didMount && state.pieces.map((piece, i) => renderListItem(piece, i))}
		</React.Fragment>
	);
}

// ListBoard.propTypes = {
// 	board : PropTypes.object
// };
