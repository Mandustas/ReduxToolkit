import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    balls: [],
};
export const ballsSlice = createSlice({
    name: 'balls',
    initialState,
    reducers: {
        addBall: (state, action) => {
            state.balls.push(action.payload);
        },
        removeBall: (state) => {
            state.balls.pop();
        },

    },

});

export const { addBall, removeBall } = ballsSlice.actions;

export const selectBalls = (state) => state.balls.balls;

export default ballsSlice.reducer;
