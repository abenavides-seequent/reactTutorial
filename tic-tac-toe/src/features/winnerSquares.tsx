import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

interface winningState {
    squareA: number,
    squareB: number,
    squareC: number
}

const initialState: winningState = {
    squareA: 0,
    squareB: 0,
    squareC: 0,
}

export const winningSlice = createSlice({
    name: 'winning',
    initialState,
    reducers: {
        squareA: (state, action) => {
            state.squareA = action.payload
        },
        squareB: (state,action) => {
            state.squareB = action.payload
        },
        squareC: (state, action) => {
            state.squareC = action.payload
        }
    }
});

export const {squareA, squareB, squareC} = winningSlice.actions;
export default winningSlice.reducer;