import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../service/api';
import { DataGroupInterface, UserInterface } from '../types/dataTypes';

export const getAllData = createAsyncThunk('user/getAllData', async () => {
	const res = await api.get(`/users`);

	return res.data;
});

const initialState: DataGroupInterface = {
	status: 'loading',
	Inadimplentes: 0,
	Adimplentes: 0,
	AdimplenteTotal: 0,
	users: null,
	total: 0,
};

export const dataGroupSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllData.pending, (state, action) => {
			state.status = 'loading';
		});
		builder.addCase(getAllData.fulfilled, (state, { payload }) => {
			const adimplentes = payload.users.filter(
				(user: UserInterface) => user.status === '0'
			);
			const inadimplentes = payload.users.filter(
				(user: UserInterface) => user.status === '1'
			);

			state.status = 'sucess';
			state.total = payload.total;
			state.Inadimplentes = inadimplentes.length;
			state.Adimplentes = adimplentes.length;
			state.AdimplenteTotal = adimplentes
				.map((a: UserInterface) => Number(a.amount))
				.reduce((acc: number, current: number) => acc + current);
		});
		builder.addCase(getAllData.rejected, (state) => {
			state.status = 'failed';
		});
	},
});

export default dataGroupSlice.reducer;
