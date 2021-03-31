import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../service/api';
import { initialStateInterface, UserInterface } from '../types/dataTypes';

export const getUserById = createAsyncThunk(
	'users/getUserById',
	async (userId: number) => {
		const res = await api.get(`/profile/${userId}`);
		return res.data as UserInterface;
	}
);

const initialState: initialStateInterface = {
	user: undefined,
	status: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getUserById.pending, (state, action) => {
			state.status = 'loading';
		});
		builder.addCase(getUserById.fulfilled, (state, { payload }) => {
			state.user = payload;
			state.status = 'sucess';
		});
		builder.addCase(getUserById.rejected, (state) => {
			state.status = 'failed';
		});
	},
});

export default userSlice.reducer;
