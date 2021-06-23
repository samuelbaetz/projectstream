import { SETAUTH, SETUSER } from "./type";
import { auth,db } from '../../services/firebase';
export const setAuth = (value) => {
    return{
        type: SETAUTH,
        value: value
    }
}
export const setUser = (res) => {
    return{
        type: SETUSER,
        value: res
    }
}

export const setTheUser = () => {
    return dispatch => {
        db.collection("users").doc(auth().currentUser.uid)
        .onSnapshot((doc) => {
            dispatch(setUser(doc.data()))
        })
        
    }
}

