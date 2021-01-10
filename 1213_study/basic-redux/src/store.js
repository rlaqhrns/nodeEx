import {createStore} from 'redux';
import {INCREMENT_COUNT} from './action';

const initialState = {
    count:11,
}
const rootReducer = (state = initialState,action) => {
    switch(action.type){
        case INCREMENT_COUNT:
            return {
                ...state,
                count:state.count +1,
            }
        default :
            return state;
    }
}
export default createStore(rootReducer);