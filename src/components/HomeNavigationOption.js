import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
	card        : {
		display : 'flex'
	},
	cardDetails : {
		flex : 1
	},
	cardMedia   : {
		width : 160
	}
});

export default function HomeNavigationOption(props) {
	const classes = useStyles();
	const { post } = props;
	const [
		open,
		setOpen
	] = React.useState(false);
	const anchorRef = React.useRef(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};

	function handleListKeyDown(event) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		}
	}

	const prevOpen = React.useRef(open);
	React.useEffect(
		() => {
			if (prevOpen.current === true && open === false) {
				anchorRef.current.focus();
			}

			prevOpen.current = open;
		},
		[
			open
		]
	);

	return (
		<Grid item xs={12} md={6}>
			<CardActionArea
				component="a"
				ref={anchorRef}
				aria-controls={open ? 'menu-list-grow' : undefined}
				aria-haspopup="true"
				onClick={handleToggle}
			>
				<Card className={classes.card}>
					<div className={classes.cardDetails}>
						<CardContent>
							<Typography component="h2" variant="h5">
								{post.title}
							</Typography>
							<Typography variant="subtitle1" paragraph>
								{post.description}
							</Typography>
						</CardContent>
					</div>
					<Hidden xsDown>
						<CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
					</Hidden>
				</Card>
			</CardActionArea>
			<Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{
							transformOrigin : placement === 'bottom' ? 'center top' : 'center bottom',
							marginTop       : '5px'
						}}
					>
						<Paper>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
									{post.options.map((option) => (
										<MenuItem onClick={() => (window.location.href = option.link)}>
											{option.title}
										</MenuItem>
									))}
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</Grid>
	);
}

HomeNavigationOption.propTypes = {
	post : PropTypes.object
};
