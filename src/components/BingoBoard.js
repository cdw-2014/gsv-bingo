import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import axios from 'axios';
import { Card } from '@material-ui/core';

const useStyles = makeStyles({
	card        : {
		display : 'flex',
		width   : '15%',
		height  : '8ch'
	},
	cardDetails : {
		flex : 1
	},
	cardMedia   : {
		width : 160
	}
});

export default function BingoBoard(props) {
	const { _id, title, type, suggestion, pieces } = props;
	const classes = useStyles();
	const [
		state,
		setState
	] = React.useState({
		didMount : false
	});

	React.useEffect(() => {
		if (type === 'bingo_f') {
			pieces.splice(12, 0, { suggestion: 'FREE SPACE' });
		}
		pieces.forEach((piece) => (piece.found = false));
		setState({ ...state, didMount: true });
	}, []);

	const renderBingoRow = (rowNum) => {
		let rowPieces = pieces.slice((rowNum - 1) * 5, rowNum * 5);
		return (
			<Grid container item xs={10} justify="space-around" alignItems="center" direction="row" spaing={3}>
				{rowPieces.map((piece) => {
					return <Card className={classes.card}>{piece.suggestion}</Card>;
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
