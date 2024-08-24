import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cars: [],
    highlightedCars: JSON.parse(localStorage.getItem('highlightedCars')) || [],
};

const carSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        setCars: (state, action) => {
            state.cars = action.payload;
        },
        addHighlightedCar: (state, action) => {
            state.highlightedCars.push(action.payload);
            localStorage.setItem('highlightedCars', JSON.stringify(state.highlightedCars));
        },
        removeHighlightedCar: (state, action) => {
            state.highlightedCars = state.highlightedCars.filter(car => car.Cid !== action.payload);
            localStorage.setItem('highlightedCars', JSON.stringify(state.highlightedCars));
        },
    },
});

export const { setCars, addHighlightedCar, removeHighlightedCar } = carSlice.actions;
export default carSlice.reducer;
