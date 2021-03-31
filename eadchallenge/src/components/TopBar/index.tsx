import { Avatar, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootUserState } from '../../redux/store';
import { getUserById } from '../../redux/userSlice';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import SearchBar from '../SearchBar';
import './styles.scss';

interface TopBarProps {
	click: boolean;
	setClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopBar: React.FC<TopBarProps> = ({ click, setClick }) => {
	const dispatch = useDispatch();
	const { user } = useSelector((state: RootUserState) => state.user);
	useEffect(() => {
		dispatch(getUserById(1));
		console.log(user);
	}, [dispatch]);

	return (
		<div className='topbar-container'>
			<div className='mobile-button' onClick={() => setClick(!click)}>
				{click ? (
					<Button icon={<MenuOutlined />} />
				) : (
					<Button icon={<CloseOutlined />} />
				)}
			</div>
			<SearchBar />

			{user ? (
				<Avatar
					className='user-avatar'
					src={user?.photo_url}
					shape='circle'
					size={64}
				/>
			) : null}
		</div>
	);
};

export default TopBar;
