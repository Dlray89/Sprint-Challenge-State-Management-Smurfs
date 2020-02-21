import { FETCH_DATA, UPDATE_SMURF } from "../actions";

export const initialState = {
    Smurfs: [],
    isFetchingData: false,
    error: ''
}

export const smurfsReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_DATA:
            return {
                state,
                isFetchingData: true,
                Smurfs: []
            }
            case UPDATE_SMURF:
                return {
                    state,
                    Smurfs: action.payload,
                    isFetchingData: false,
                };
            default:
                return state
    }
}