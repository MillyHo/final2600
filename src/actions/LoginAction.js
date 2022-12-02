import { 
    LOGIN,
    LOGIN_ERROR
 } from "./types";


//change state
export const loginState = (state) => async dispatch => {
    try{
        state = true;
        dispatch({
            type: LOGIN,
            payload: {
                userName,
                password
            }
        });
    } catch(err){
        dispatch({
            type: LOGIN_ERROR,
            payload: err.response.stateText
        })
    }
};