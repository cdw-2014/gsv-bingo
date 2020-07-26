import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import About from './About';

const useStyles = makeStyles((theme) => ({
	toolbar          : {
		borderBottom : `1px solid ${theme.palette.divider}`
	},
	toolbarTitle     : {
		flex : 1
	},
	toolbarSecondary : {
		justifyContent : 'space-between',
		overflowX      : 'auto'
	},
	toolbarLink      : {
		padding    : theme.spacing(1),
		flexShrink : 0
	}
}));

export default function Header(props) {
	const classes = useStyles();
	const { sections, title, user } = props;

	const renderSignIn = () => (
		<Button variant="outlined" size="small" onClick={() => (window.location.href = '/login')}>
			Sign In
		</Button>
	);

	const renderSignOut = () => {
		return (
			<React.Fragment>
				<Typography>Hello, {user.name}</Typography>
				<Button variant="outlined" size="small" onClick={() => (window.location.href = '/login')}>
					Sign Out
				</Button>
			</React.Fragment>
		);
	};

	return (
		<React.Fragment>
			<Toolbar className={classes.toolbar}>
				<Button onClick={() => (window.location.href = '/about')} size="small">
					About
				</Button>
				<Typography
					component="h2"
					variant="h5"
					color="inherit"
					align="center"
					noWrap
					className={classes.toolbarTitle}
				>
					<Link href="/" color="inherit">
						{title}
					</Link>
				</Typography>
				{user.isAnon ? renderSignIn() : renderSignOut()}
			</Toolbar>
			<Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
				{sections.map((section) => (
					<Link
						color="inherit"
						noWrap
						key={section.title}
						variant="body2"
						href={section.url}
						className={classes.toolbarLink}
					>
						{section.title}
					</Link>
				))}
			</Toolbar>
		</React.Fragment>
	);
}

Header.propTypes = {
	sections : PropTypes.array,
	title    : PropTypes.string
};
