import { createSlice } from "@reduxjs/toolkit";

import axios from 'axios';
import TRAFFIC_DATA_LIMIT from "@/config.js";

var initialState = [];

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        pushData: (state, data) => {
            while(state.length > TRAFFIC_DATA_LIMIT){
                state.shift();
            }
            state.push(data);
        },
        popData: (state) => {
            while(state.length > TRAFFIC_DATA_LIMIT){
                state.shift();
            }
        },
    }
});

export const { pushData, popData } = counterSlice.actions;
export default counterSlice.reducer;
