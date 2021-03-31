import { Input } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getUserByQuery } from '../../redux/userByQuerySlice';
import './styles.scss';
import { useHistory } from 'react-router-dom';

const SearchBar: React.FC = () => {
	const dispatch = useDispatch();
	const router = useHistory();

	return (
		<div className='searchbox-container'>
			<Input.Search
				onSearch={(value) => {
					dispatch(getUserByQuery(value));
					router.push('/user');
				}}
				placeholder='Email ou nome'
				enterButton
				className='input-search'
			/>
		</div>
	);
};

export default SearchBar;
