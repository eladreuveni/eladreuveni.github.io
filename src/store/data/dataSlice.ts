import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '..';
import { fetchPhotos } from './thunks';

export interface DataState {
    value: number;
    status: 'idle' | 'loading' | 'failed';
    searchPhotos: { id: number, largeImageURL: string }[];
}

const initialState: DataState = {
    value: 0,
    status: 'idle',
    searchPhotos: []
};

export const fetchCityPhotos = createAsyncThunk(
    'data/fetchCityPhotos',
    async (city: string) => {
        const response = await fetchPhotos(city);
        return response;
    }
);

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCityPhotos.pending, (state) => {
            })
            .addCase(fetchCityPhotos.fulfilled, (state, action) => {
                state.searchPhotos = action.payload;
            })
            .addCase(fetchCityPhotos.rejected, (state) => {
            });
    },
});

export const { increment, decrement, incrementByAmount } = dataSlice.actions;

export const selectCount = (state: RootState) => state.data.value;

export const incrementIfOdd =
    (amount: number): AppThunk =>
        (dispatch, getState) => {
            const currentValue = selectCount(getState());
            if (currentValue % 2 === 1) {
                dispatch(incrementByAmount(amount));
            }
        };

export default dataSlice.reducer;