import {
    GET_NEWS, 
    HIDE_POST,
    REFRESH_STORE
} from '../actions/news';

const initialState = {
    list: [],
    page: 0,
    hiddenPosts: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_NEWS: 
            return {
                ...state,
                list: action.data.hits,
                page: action.data.page
            };
        case HIDE_POST:
            const posts = state.hiddenPosts.slice();
            posts.push(action.data);
            localStorage.setItem('hiddenPosts', JSON.stringify(posts));
            return{
                ...state,
                hiddenPosts: posts
            }
        case REFRESH_STORE:
            let hiddenPosts = localStorage.getItem('hiddenPosts');
            if(hiddenPosts){
                hiddenPosts = JSON.parse(hiddenPosts);
            }
            return {
                ...state,
                hiddenPosts: hiddenPosts || []
            }
        default:
            return state;
    }
}