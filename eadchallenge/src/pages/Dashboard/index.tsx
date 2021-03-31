import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataGroup from '../../components/DataGroup';
import Menu from '../../components/Menu';
import TopBar from '../../components/TopBar';
import UsersList from '../../components/UsersList';
import { RootUsersState, RootUserState } from '../../redux/store';
import { getAllUsers } from '../../redux/usersSlice';

import './styles.scss';
import Routes from '../../routes';

const Dashboard: React.FC = () => {
	const [click, setClick] = useState(false);
	const dispatch = useDispatch();
	const users = useSelector((state: RootUsersState) => state.users);
	const user = useSelector((state: RootUserState) => state.user);

	useEffect(() => {
		dispatch(getAllUsers());
	}, [dispatch]);

	return (
		<div>
			<TopBar click={click} setClick={setClick} />
			<div className='content-container'>
				<Menu click={click} />
				<div>
					<DataGroup />
					<Routes />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
