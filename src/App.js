import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import SuggestionForm from './components/SuggestionForm';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/suggest" component={SuggestionForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
