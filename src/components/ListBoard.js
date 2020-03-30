import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import axios from 'axios';

export default function ListBoard(props) {
	const { board } = props;
	const [
		state,
		setState
	] = React.useState();

	return (
		<Grid container xs={12} justify="center" alignItems="center" direction="row">
			<p>test</p>
		</Grid>
	);
}

ListBoard.propTypes = {
	board : PropTypes.object
};
