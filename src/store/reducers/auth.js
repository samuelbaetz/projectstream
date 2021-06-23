 import {SETAUTH, SETUSER} from '../actions/type'

const initialState = {
    authenticated: false,
    user: {}
}

export default function(state=initialState, action){
    switch(action.type){
        case SETAUTH:
            return{
                ...state,
                authenticated: action.value
            }
        case SETUSER:
            return{
                ...state,
                user: action.value
            }
        default:
            return state
    }
}