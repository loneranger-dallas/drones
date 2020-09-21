import * as types from "./actionTypes";
import * as dronesApi from "api/dronesApi";

export function loadDronesInfoSuccess(drones) {
    return { type: types.LOAD_DRONES_SUCCESS, drones }
}

// Create thunk.
export function loadDronesInfo() {
    return function (dispatch) {
        return dronesApi.getDrones().then(drones => {
            dispatch(loadDronesInfoSuccess(drones))
        }).catch(error => {
            throw error;
        })
    }
}