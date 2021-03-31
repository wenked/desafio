import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataGroup from '../../components/DataGroup';
import Menu from '../../components/Menu';
import TopBar from '../../components/TopBar';

import { getAllUsers } from '../../redux/usersSlice';

import './styles.scss';
import Routes from '../../routes';
import { getAllData } from '../../redux/dataGroupSlice';
import { RootToggleState } from '../../redux/store';

const Dashboard: React.FC = () => {
	const [click, setClick] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllData());
		dispatch(getAllUsers(0));
	}, [dispatch]);

	return (
		<div>
			<TopBar click={click} setClick={setClick} />
			<div className='content-container'>
				<Menu click={click} setClick={setClick} />
				<div>
					<Routes />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
