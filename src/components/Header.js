import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Collapse from '@material-ui/core/Collapse';
import About from './About';

const useStyles = makeStyles((theme) => ({
	toolbar          : {
		borderBottom : `1px solid ${theme.palette.divider}`
	},
	toolbarTitle     : {
		flex : 1
	},
	toolbarSecondary : {
		justifyContent  : 'space-between',
		overflowX       : 'auto',
		backgroundColor : 'white'
	},
	toolbarLink      : {
		padding    : theme.spacing(1),
		flexShrink : 0
	}
}));

export default function Header(props) {
	const classes = useStyles();
	const { sections, title, user } = props;
	const [
		open,
		setOpen
	] = React.useState(false);

	const renderSignIn = () => (
		<IconButton variant="outlined" size="small" onClick={() => (window.location.href = '/login')}>
			Sign In
		</IconButton>
	);

	const renderSignOut = () => {
		return (
			<Button variant="outlined" size="small" onClick={() => (window.location.href = '/login')}>
				Sign Out
			</Button>
		);
	};

	const handleMenu = () => {
		setOpen(!open);
	};

	return (
		<React.Fragment>
			<Toolbar className={classes.toolbar}>
				<Button onClick={() => handleMenu()} size="small">
					<MenuIcon />
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
			<Collapse in={open}>
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
			</Collapse>
		</React.Fragment>
	);
}

Header.propTypes = {
	sections : PropTypes.array,
	title    : PropTypes.string
};
