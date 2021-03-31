import { Button } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootToggleState, RootUsersState } from '../../redux/store';
import { getAllUsers } from '../../redux/usersSlice';
import DataGroup from '../DataGroup';
import TitleComponent from '../TitleComponent';
import User from '../User';
import './styles.scss';

const UsersList: React.FC = () => {
	const dispatch = useDispatch();
	const [pag, setPag] = useState(0);
	const users = useSelector((state: RootUsersState) => state.users);
	const toggleClick = useSelector((state: RootToggleState) => state.toggle);

	return users.status !== 'loading' ? (
		<div className='container' style={{ display: toggleClick ? 'none' : '' }}>
			<DataGroup />
			<TitleComponent title='Clientes cadastrados' />
			<div className='users-container'>
				{users.users?.map((user) => (
					<div key={user.id}>
						<User user={user} />
					</div>
				))}
			</div>
			<div className='pag-container'>
				<div className='pag-button'>
					<Button
						onClick={() => {
							if (pag >= 0) {
								setPag(pag - 10);
								dispatch(getAllUsers(pag));
							} else {
								setPag(0);
								dispatch(getAllUsers(pag));
							}
						}}>
						Prev
					</Button>
				</div>
				<div className='pag-button'>
					<Button
						onClick={() => {
							setPag(pag + 10);
							dispatch(getAllUsers(pag));
						}}>
						Next
					</Button>
				</div>
			</div>
		</div>
	) : (
		<div>loading...</div>
	);
};

export default UsersList;
