import {
    GET_NEWS
} from '../actions/news';

const initialState = {
    list: [],
    page: 0
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_NEWS: 
            return {
                ...state,
                list: action.data.hits,
                page: action.data.page
            };
        default:
            return state;
    }
}