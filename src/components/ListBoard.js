import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card, CardActionArea } from '@material-ui/core';

const useStyles = makeStyles({
	card : {
		display   : 'flex',
		width     : '35%',
		height    : '30px',
		marginTop : '5px'
	}
});

export default function ListBoard(props) {
	const { title } = props;
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
		return (
			<Card key={piece._id} className={classes.card} style={{ backgroundColor: piece.found ? 'green' : 'white' }}>
				<CardActionArea onClick={(e) => updatePieces(i)}>{piece.suggestion}</CardActionArea>
			</Card>
		);
	};

	return (
		<React.Fragment>
			<Grid container item xs={10} justify="space-around" alignItems="center" direction="column" spacing={2}>
				<h3>{props.title}</h3>
				{state.didMount && state.pieces.map((piece, i) => renderListItem(piece, i))}
			</Grid>
		</React.Fragment>
	);
}
