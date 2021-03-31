import { Input } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getUserByQuery } from '../../redux/userByQuerySlice';
import './styles.scss';

const SearchBox: React.FC = () => {
	const dispatch = useDispatch();

	return (
		<div className='searchbox-container'>
			<Input.Search
				onSearch={(value) => dispatch(getUserByQuery(value))}
				placeholder='Email ou nome'
				enterButton
				className='input-search'
			/>
		</div>
	);
};

export default SearchBox;
