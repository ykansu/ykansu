/**
 * Created by Yasin KANSU on 21.10.2018.
 */

import {initialState} from "../constants/initialState";
import {actionTypes} from "../constants/actionTypes";

export function mainReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.OPEN_THING:
            return Object.assign({}, state, {
                open: action.open
            });

        default:
            return state
    }
}