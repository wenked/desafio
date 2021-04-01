import { Pagination } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	RootToggleState,
	RootUserDataGroup,
	RootUsersState,
} from '../../redux/store';
import { getAllUsers } from '../../redux/usersSlice';
import DataGroup from '../DataGroup';
import Loading from '../Loading';
import TitleComponent from '../TitleComponent';
import User from '../User';
import './styles.scss';

const UsersList: React.FC = () => {
	const dispatch = useDispatch();
	const [pag, setPag] = useState(1);
	const users = useSelector((state: RootUsersState) => state.users);
	const toggleClick = useSelector((state: RootToggleState) => state.toggle);
	const { total } = useSelector((state: RootUserDataGroup) => state.dataGroup);

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
				<Pagination
					total={total}
					defaultCurrent={1}
					current={pag}
					onChange={(page) => {
						setPag(page);
						dispatch(getAllUsers((page - 1) * 10));
					}}
				/>
			</div>
		</div>
	) : (
		<Loading />
	);
};

// pag 1 -- offset 0 , pag 2 offset 10, pag 3 offset 20

export default UsersList;
