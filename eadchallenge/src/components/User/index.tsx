import { Avatar } from 'antd';
import React from 'react';
import { UserInterface } from '../../types/dataTypes';
import './styles.scss';

interface UserProps {
	user: UserInterface;
}

const User: React.FC<UserProps> = ({ user }) => {
	return (
		<div className='user-container'>
			<Avatar src={user.photo_url} />
			<div className='user-item'>{user.name}</div>
			<div className='user-item'>{user.email}</div>
			<div className='user-item'>{user.phone}</div>
			<div className='user-item'>R${user.amount}</div>
			<div className='user-item'>
				{user.status === '0' ? (
					<div className='user-item'>Adimplente</div>
				) : (
					<div
						className='user-item'
						style={{ color: 'red', fontWeight: 'bold' }}>
						Inadimplente
					</div>
				)}
			</div>
		</div>
	);
};

export default User;
