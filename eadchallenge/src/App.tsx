import { Button } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import Menu from './components/Menu';
import TopBar from './components/TopBar';
import {
	RootUserByQueryState,
	RootUsersState,
	RootUserState,
} from './redux/store';
import { getUserByQuery } from './redux/userByQuerySlice';
import { getUserById } from './redux/userSlice';
import { getAllUsers } from './redux/usersSlice';
import { UserByQueryInterface } from './types/dataTypes';

const App: React.FC = () => {
	const [click, setClick] = useState(false);
	const dispatch = useDispatch();
	const users = useSelector((state: RootUsersState) => state.users);

	useEffect(() => {
		dispatch(getAllUsers());
		console.log(users);
	}, [dispatch, users]);

	return (
		<div className='App'>
			<TopBar click={click} setClick={setClick} />
			<Menu click={click} />
		</div>
	);
};

export default App;
