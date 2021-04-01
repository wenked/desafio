import { Avatar, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootToggleState, RootUserState } from '../../redux/store';
import { getUserById } from '../../redux/userSlice';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import SearchBar from '../SearchBar';
import './styles.scss';
import { toggle } from '../../redux/toggleSlice';

interface TopBarProps {
	click: boolean;
	setClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopBar: React.FC<TopBarProps> = ({ click, setClick }) => {
	const dispatch = useDispatch();
	const { user } = useSelector((state: RootUserState) => state.user);
	const toggleClick = useSelector((state: RootToggleState) => state.toggle);
	useEffect(() => {
		dispatch(getUserById(1));
	}, [dispatch]);

	return (
		<div className='topbar-container'>
			<div
				className='mobile-button'
				onClick={() => {
					dispatch(toggle());
					console.log(toggleClick);
				}}>
				{!toggleClick ? (
					<Button
						style={{ backgroundColor: '#43aa8b' }}
						icon={
							<MenuOutlined
								style={{ color: 'white', backgroundColor: '#43aa8b' }}
							/>
						}
					/>
				) : (
					<Button
						style={{ backgroundColor: '#43aa8b' }}
						icon={
							<CloseOutlined
								style={{ color: 'white', backgroundColor: '#43aa8b' }}
							/>
						}
					/>
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
