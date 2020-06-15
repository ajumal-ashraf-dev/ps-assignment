import {
    GET_NEWS, 
    HIDE_POST,
    UPVOTE_POST,
    REFRESH_STORE
} from '../actions/news';

const initialState = {
    list: [],
    page: 0,
    hiddenPosts: [],
    upvotes: {}
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
        case UPVOTE_POST:
            const upvotes = {...state.upvotes};
            if(upvotes[action.data]){
                upvotes[action.data]++;
            } else {
                upvotes[action.data] = 1;
            }
            localStorage.setItem('upvotes', JSON.stringify(upvotes));
            return {
                ...state,
                upvotes
            }
        case REFRESH_STORE:
            let hiddenPosts = localStorage.getItem('hiddenPosts');
            let upvotedPosts = localStorage.getItem('upvotes');
            if(hiddenPosts){
                hiddenPosts = JSON.parse(hiddenPosts);
            }
            if(upvotedPosts){
                upvotedPosts = JSON.parse(upvotedPosts);
            }
            return {
                ...state,
                hiddenPosts: hiddenPosts || [],
                upvotes: upvotedPosts || {}
            }
        default:
            return state;
    }
}