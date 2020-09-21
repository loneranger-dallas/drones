import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/drones/";

export function getDrones() {
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}