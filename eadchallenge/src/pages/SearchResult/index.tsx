import { Spin } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import User from '../../components/User';
import { RootToggleState, RootUserByQueryState } from '../../redux/store';

const SearchResult: React.FC = () => {
	const userByQuery = useSelector(
		(state: RootUserByQueryState) => state.userByQuery
	);
	const toggleClick = useSelector((state: RootToggleState) => state.toggle);

	return userByQuery.status !== ' loading' ? (
		<div style={{ display: toggleClick ? 'none' : '' }}>
			<div className='search-users'>
				{userByQuery.search?.map((user) => (
					<User user={user} />
				))}
			</div>
		</div>
	) : (
		<Spin />
	);
};

export default SearchResult;
