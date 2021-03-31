import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../service/api';
import { UserInterface, UsersInitialStateInterface } from '../types/dataTypes';

export const getAllUsers = createAsyncThunk(
	'user/getAllUsers',
	async (offset: number) => {
		const res = await api.get(`/users?offset=${offset}`);

		return res.data.users as UserInterface[];
	}
);

const initialState: UsersInitialStateInterface = {
	users: null,
	status: 'loading',
};

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllUsers.pending, (state, action) => {
			state.status = 'loading';
		});
		builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
			state.users = payload;
			state.status = 'sucess';
		});
		builder.addCase(getAllUsers.rejected, (state) => {
			state.status = 'failed';
		});
	},
});

export default usersSlice.reducer;
