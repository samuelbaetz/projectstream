import { SETLOADING } from "../actions/type";

const initialState = {
    loading: true
}

export default function(state=initialState, action){
    switch(action.type){
        case SETLOADING:
            return{
                ...state,
                loading: action.value
            }
        default:
            return state
    }
}