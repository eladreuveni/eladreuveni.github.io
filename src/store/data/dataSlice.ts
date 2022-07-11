import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '..';
import { fetchPhotos, getCitiesForAutoComplete } from './thunks';

export interface DataState {
    value: number;
    status: 'idle' | 'loading' | 'failed';
    searchPhotos: { id: number, largeImageURL: string }[];
    citiesPool: { id: number, name: string, country: string }[];
}

const initialState: DataState = {
    value: 0,
    status: 'idle',
    searchPhotos: [],
    citiesPool: []
};

export const fetchCityPhotos = createAsyncThunk(
    'data/fetchCityPhotos',
    async (city: string) => {
        const response = await fetchPhotos(city);
        return response;
    }
);

export const getCitiesAutoComplete = createAsyncThunk(
    'data/getCitiesAutoComplete',
    async (city: string) => {
        const response = await getCitiesForAutoComplete(city);
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
        clearCitiesPool: (state) => {
            state.citiesPool = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCityPhotos.pending, (state) => {
            })
            .addCase(fetchCityPhotos.fulfilled, (state, action) => {
                state.searchPhotos = action.payload;
            })
            .addCase(fetchCityPhotos.rejected, (state) => {
            })
            .addCase(getCitiesAutoComplete.pending, (state) => {
            })
            .addCase(getCitiesAutoComplete.fulfilled, (state, action) => {
                state.citiesPool = action.payload;
            })
            .addCase(getCitiesAutoComplete.rejected, (state) => {
            })
    },
});

export const { clearCitiesPool } = dataSlice.actions;

export const selectCount = (state: RootState) => state.data.value;

export default dataSlice.reducer;