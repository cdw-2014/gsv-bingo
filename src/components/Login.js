import React, { useContext } from 'react';
// import { useStore } from '../reducers/store';
// import { UPDATE_USER } from '../reducers/actions';
import { Stitch, GoogleRedirectCredential } from 'mongodb-stitch-browser-sdk';
import { AuthContext } from '../AuthContext';
import { Button, Tooltip } from '@material-ui/core';

export default function Login() {
	// const { currentUser, dispatch } = useStore();
	// const { name } = currentUser;
	const authContext = useContext(AuthContext);
	const [
		currentUser,
		setCurrentUser
	] = React.useState(null);
	const [
		authAction,
		setAuthAction
	] = React.useState(null);

	const handleClick = (action) => {
		setAuthAction(action);
	};

	React.useEffect(
		() => {
			const authenticate = async () => {
				// Below code runs on mount to get current user if already authenticated
				const appId = 'gsvbingo-bbxfg';

				const client = Stitch.hasAppClient(appId)
					? Stitch.getAppClient(appId)
					: Stitch.initializeAppClient(appId);

				if (client.auth.hasRedirectResult()) {
					await client.auth.handleRedirectResult().then((user) => console.log(user)).catch(console.error);
					console.log('Processed redirect result.');
				}
				if (client.auth.isLoggedIn) {
					setCurrentUser(client.auth.user.profile.name);
				}

				// Below code runs after button is pressed
				if (authAction !== null) {
					if (authAction === 'continue') {
						// Continue to GSV-Bingo with current account
						authContext.login(client.auth.user.profile.name, client.auth.user.profile.email);
						window.location.replace('/');
					} else if (authAction === 'login') {
						// Log into Google account
						authContext.logout();
						const credential = new GoogleRedirectCredential();
						client.auth
							.loginWithRedirect(credential)
							.then((user) => {
								authContext.login(client.auth.user.profile.name, client.auth.user.profile.email);
								window.location.replace('/');
							})
							.catch((err) => console.log('Login error: ', err));
					} else if (authAction === 'skip') {
						// Continue to GSV-Bingo as anonymous
						client.auth.logout().then((user) => authContext.logout());
						window.location.replace('/');
					}
				}
			};
			authenticate();
		},
		[
			authAction
		]
	);

	const renderNotLoggedIn = () => (
		<React.Fragment>
			<h3>You are not logged in! Please authenticate with Google to play Google Street View Bingo.</h3>
			<Button onClick={() => handleClick('login')}>Log In</Button>
			<Tooltip title="Skipping login will let you use the site anonymously, but your boards will not be saved!">
				<Button onClick={() => handleClick('skip')}>No Thanks</Button>
			</Tooltip>
		</React.Fragment>
	);

	const renderLoggedIn = () => (
		<React.Fragment>
			<h3>Welcome back!</h3>
			<Button onClick={() => handleClick('continue')}>Continue as {currentUser}</Button>
			{/* <Tooltip title="You will be prompted to switch accounts.">
				<Button onClick={() => handleClick('login')}>Not {currentUser}</Button>
			</Tooltip> */}
			<Tooltip title="Skipping login will let you use the site anonymously, but your boards will not be saved!">
				<Button onClick={() => handleClick('skip')}>Continue as Anonymous</Button>
			</Tooltip>
		</React.Fragment>
	);

	return <div className="Login">{currentUser !== null ? renderLoggedIn() : renderNotLoggedIn()}</div>;
}
