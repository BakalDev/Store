import { ActionReducer, Action } from '@ngrx/store';

import { counter } from '../models/counter';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

const initialState: counter = {
    count: 0,
    message: "Inital State"
};

export function counterReducer(state: counter = initialState, action: Action) {
    switch (action.type) {
        case INCREMENT:
            state.count += 1;
            state.message = "Incremental";
            return state;
        case DECREMENT:
            state.count -= 1;
            state.message = "Decremental";
            return state;
        case RESET:
            state.count = 0;
            state.message = "Resetal"
            return state;
        default:
            state.count = 0;
            state.message = "Defaultal";
            return state;
    }

}