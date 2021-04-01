import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import User from '../../components/User';
import { RootToggleState, RootUserByQueryState } from '../../redux/store';

const SearchResult: React.FC = () => {
	const userByQuery = useSelector(
		(state: RootUserByQueryState) => state.userByQuery
	);
	const toggleClick = useSelector((state: RootToggleState) => state.toggle);

	return userByQuery.status !== ' loading' ? (
		userByQuery.search === null ? (
			<h2 style={{ margin: '20px', color: '#43aa8b' }}>0 users found</h2>
		) : (
			<div style={{ display: toggleClick ? 'none' : '' }}>
				<div className='search-users'>
					{userByQuery.search?.map((user) => (
						<User user={user} />
					))}
				</div>
			</div>
		)
	) : (
		<Loading />
	);
};

export default SearchResult;
