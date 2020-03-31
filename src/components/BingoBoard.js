import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import axios from 'axios';
import { Card, CardActionArea } from '@material-ui/core';

const useStyles = makeStyles({
	card : {
		display  : 'flex',
		width    : '15%',
		height   : '8ch',
		flexWrap : 1
	}
});

export default function BingoBoard(props) {
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
		if (type === 'bingo_f') {
			state.pieces.splice(12, 0, { suggestion: 'FREE SPACE', found: true });
		}
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

	const renderBingoRow = (rowNum) => {
		return (
			<Grid
				container
				item
				xs={10}
				justify="space-around"
				alignItems="center"
				direction="row"
				spaing={2}
				key={rowNum}
			>
				{state.pieces.map((piece, i) => {
					if (i >= (rowNum - 1) * 5 && i < rowNum * 5) {
						return (
							<Card
								key={piece._id}
								className={classes.card}
								style={{ backgroundColor: piece.found ? 'green' : 'white' }}
							>
								<CardActionArea onClick={(e) => updatePieces(i)}>{piece.suggestion}</CardActionArea>
							</Card>
						);
					}
				})}
			</Grid>
		);
	};

	return (
		<React.Fragment>
			<h3>{props.title}</h3>
			{state.didMount &&
				[
					1,
					2,
					3,
					4,
					5
				].map((i) => renderBingoRow(i))}
		</React.Fragment>
	);
}

// BingoBoard.propTypes = {
// 	board : PropTypes.object
// };
