import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function GameBoard(props) {
	const { gameId } = props.match.params;
	console.log('gameid', gameId);
	return (
		<React.Fragment>
			<h1>gameId</h1>
			<p>{gameId}</p>
		</React.Fragment>
	);
}

GameBoard.propTypes = {
	gameId : PropTypes.string
};
