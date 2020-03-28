import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewHome from './components/Home';
import NavBar from './components/NavBar';
import SuggestionForm from './components/SuggestionForm';
import Header from './components/Header';
import CreateBoardForm from './components/CreateBoardForm';
import GameBoard from './components/GameBoard';

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

function App() {
	return (
		<div className="App">
			<Header title="Google Street View Bingo" sections={sections} />
			<Router>
				<Switch>
					<Route exact path="/" component={NewHome} />
					<Route exact path="/suggestions/submit" component={SuggestionForm} />
					<Route exact path="/boards/create" component={CreateBoardForm} />
					<Route path="/boards/play/:gameId" component={GameBoard} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
