import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import usersReducer from './usersSlice';
import userByQueryReducer from './userByQuerySlice';

export default configureStore({
	reducer: {
		user: userReducer,
		users: usersReducer,
		userByQuery: userByQueryReducer,
	},
});

export type RootUserState = { user: ReturnType<typeof userReducer> };
export type RootUsersState = { users: ReturnType<typeof usersReducer> };
export type RootUserByQueryState = {
	userByQuery: ReturnType<typeof userByQueryReducer>;
};
