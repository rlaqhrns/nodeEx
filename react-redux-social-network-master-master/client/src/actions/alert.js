import uuid from 'uuid';
import { REMOVE_ALERT, SET_ALERT } from './types';
//actions/auth.js
//actions/post.js
//actions/profile.js
//components/auth/Register.js에서 사용하는 함수
export const setAlert = (msg, alertType, timeout = 3000) => dispatch => {
    const id = uuid.v4();//id생성하여 payload에 싫어보냄 
    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id}
    });
    // After 3 seconds sends dispatch to remove alert
    //alert를 제거하기 위해 timeout 파라미터로 전송된 값을 3초 후에 dispatch 를 전송함 
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
}