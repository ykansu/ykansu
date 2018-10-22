/**
 * Created by Yasin KANSU on 21.10.2018.
 */
import {combineReducers} from 'redux';
import {mainReducer} from './mainReducer';
import {initialState} from "../constants/initialState";
import {actionTypes} from "../constants/actionTypes";

function anotherReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CLOSE_THING:
            return Object.assign({}, state, {
                open: action.open
            });

        default:
            return state
    }
}

const indexReducer = combineReducers({
    mainReducer,
    anotherReducer
});
export default indexReducer;