import {
    GET_NEWS
} from '../actions/news';

const initialState = {
    list: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_NEWS: 
            return {
                ...state,
                list: action.data
            };
        default:
            return state;
    }
}