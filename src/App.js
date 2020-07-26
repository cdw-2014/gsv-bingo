import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import SuggestionForm from './components/SuggestionForm';
import Header from './components/Header';
import CreateBoardForm from './components/CreateBoardForm';
import GameBoard from './components/GameBoard';
import Login from './components/Login';
import About from './components/About';
import { AuthContext } from './AuthContext';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const sections = [
	// { title: '1', url: '#' },
	// { title: '2', url: '#' },
	// { title: '3', url: '#' },
	// { title: '4', url: '#' },
	// { title: '5', url: '#' },
	// { title: '6', url: '#' },
	// { title: '7', url: '#' },
	// { title: '8', url: '#' },
	// { title: '9', url: '#' },
	// { title: '0', url: '#' }
];

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function App() {
	const authContext = React.useContext(AuthContext);
	const [
		user,
		setUser
	] = React.useState(JSON.parse(localStorage.getItem('userAuth')) || { name: null, email: null, isAnon: true });
	const [
		open,
		setOpen
	] = React.useState(true);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	const login = (name, email) => {
		setUser({ name: name, email: email, isAnon: false });
		localStorage.setItem('userAuth', JSON.stringify({ name: name, email: email, isAnon: false }));
	};

	const logout = () => {
		setUser({ name: null, isAnon: true });
		localStorage.setItem('userAuth', JSON.stringify({ name: null, email: null, isAnon: true }));
	};

	return (
		<div className="App">
			<Header title="Google Street View Bingo" sections={sections} user={user} />
			<Router>
				<Switch>
					<AuthContext.Provider value={{ login: login, logout: logout }}>
						<Route exact path="/" component={Home} />
						<Route
							exact
							path="/suggestions/submit"
							render={(props) => <SuggestionForm {...props} user={user} />}
						/>
						<Route
							exact
							path="/boards/create"
							render={(props) => <CreateBoardForm {...props} user={user} />}
						/>
						<Route path="/boards/play/:gameId" render={(props) => <GameBoard {...props} user={user} />} />
						<Route path="/login" component={Login} />
						<Route exact path="/about" render={(props) => <About {...props} user={user} />} />
					</AuthContext.Provider>
				</Switch>
			</Router>
			{user.isAnon ? (
				<Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
					<Alert onClose={handleClose} severity="warning">
						You are not signed in with Google! Your boards and suggestions will not be saved to your
						account!
					</Alert>
				</Snackbar>
			) : null}
		</div>
	);
}

export default App;
