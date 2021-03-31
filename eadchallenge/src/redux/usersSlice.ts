import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../service/api';
import { UserInterface, UsersInitialStateInterface } from '../types/dataTypes';

export const getAllUsers = createAsyncThunk('user/getAllUsers', async () => {
	const res = await api.get('/users');

	return res.data.users as UserInterface[];
});

const initialState: UsersInitialStateInterface = {
	users: null,
	status: 'loading',
	Inadimplentes: 0,
	Adimplentes: 0,
	AdimplenteTotal: 0,
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
			const adimplentes = payload.filter((user) => user.status === '0');
			const inadimplentes = payload.filter((user) => user.status === '1');

			state.users = payload;
			state.status = 'sucess';
			state.Inadimplentes = inadimplentes.length;
			state.Adimplentes = adimplentes.length;
			state.AdimplenteTotal = adimplentes
				.map((a) => Number(a.amount))
				.reduce((acc, current) => acc + current);
		});
		builder.addCase(getAllUsers.rejected, (state) => {
			state.status = 'failed';
		});
	},
});

export default usersSlice.reducer;
