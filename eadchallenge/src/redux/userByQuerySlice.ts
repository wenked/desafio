import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../service/api';
import { UserByQueryInterface, UserInterface } from '../types/dataTypes';

export const getUserByQuery = createAsyncThunk(
	'userByQuery/getUserByQuery',
	async (query: string) => {
		const res = await api.get(`/search?q=${query}`);

		return res.data;
	}
);

const initialState: UserByQueryInterface = {
	search: null,
	status: 'loading',
	msg: '',
};

export const userByQuerySlice = createSlice({
	name: 'userByQuery',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getUserByQuery.pending, (state, action) => {
			state.status = 'loading';
		});
		builder.addCase(getUserByQuery.fulfilled, (state, { payload }) => {
			if (typeof payload === 'string') {
				state.msg = '0 users found';
				state.search = null;
				state.status = 'success';
			} else {
				state.search = payload.search;
				state.status = 'sucess';
			}
		});
		builder.addCase(getUserByQuery.rejected, (state) => {
			state.status = 'failed';
		});
	},
});

export default userByQuerySlice.reducer;
