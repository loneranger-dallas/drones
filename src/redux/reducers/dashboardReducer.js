import * as types from "redux/actions/actionTypes";
import initialState from "./initialState";

export default function dashboardReducer(state = initialState.dashboard, action) {
    switch (action.type) {
        case types.LOAD_DRONES_SUCCESS:
            let newState = {};
            return Object.assign(newState, state, { drones: action.drones });
        default:
            return state;
    }
}