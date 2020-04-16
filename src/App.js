import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './routes/Home';
import Rooms from './routes/Rooms';
import SingleRoom from './routes/SingleRoom';
import Error from './routes/Error';

import Nav from './components/Nav';

function App() {
	return (
		<>
			<Nav />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/rooms/" component={Rooms} />
				<Route path="/rooms/:slug" component={SingleRoom} />
				<Route component={Error} />
			</Switch>
		</>
	);
}

export default App;
