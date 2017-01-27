import { ActionReducer, Action } from '@ngrx/store';

import { alert } from '../models/alert';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const SET = 'SET';
export const GET = 'GET';

const initialState: alert = {
    count: 0,
    alertMessage: "Inital State",
    alertType: "Initial Type"
};

export function alertReducer(state: alert = initialState, action: Action) {
    switch (action.type) {
        case INCREMENT:
            state.count += 1;
            state.alertMessage = "Incremental";
            state.alertType = "Incremental Type";
            return state;
        case DECREMENT:
            state.count -= 1;
            state.alertMessage = "Decremental";
            state.alertType = "Decremental Type";
            return state;
        case RESET:
            state.count = 0;
            state.alertMessage = "Resetal";
            state.alertType = "Resetal Type";
            return state;
        case SET:
            return state = action.payload;
        case GET:
            return state;
        default:
            state.count = 0;
            state.alertMessage = "Defaultal";
            state.alertType = "Defaultal Type";
            return state;
    }

}