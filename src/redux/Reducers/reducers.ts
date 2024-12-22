import { SET_DATA, SET_ID } from '../Actions/action';





interface initialState {
    data: any[];

}

const initialState: initialState = {
    data: [],

};

export const mainReducer = (state = initialState, action: any): initialState => {
    switch (action.type) {

        case SET_DATA:
            console.log("first", action.payload)
            return { ...state, data: action.payload };


        default:
            return state;
    }
};
