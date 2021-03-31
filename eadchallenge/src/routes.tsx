import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UsersList from './components/UsersList';
import SearchResult from './pages/SearchResult';

const Routes: React.FC = () => {
	return (
		<Switch>
			<Route path='/user' exact component={SearchResult} />
			<Route path='/' component={UsersList} />
		</Switch>
	);
};

export default Routes;
