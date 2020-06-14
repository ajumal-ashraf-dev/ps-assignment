import axios from 'axios';

export const GET_NEWS = "GET_NEWS";
export const HIDE_POST = "HIDE_POST";
export const REFRESH_STORE = "REFRESH_STORE";

export const getNews = (page = 0) => {
    return async (dispatch, getState) => {
        
        const response = await axios.get('https://hn.algolia.com/api/v1/search_by_date?tags=story&page=' + page, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const responseData = response.data;
        if(response.status != 200){
            console.log("Error fetching data");
            return;
        }
        dispatch({type: GET_NEWS, data: responseData});
    }
}

export const hidePost = (id) => {
    return {type: HIDE_POST, data: id};
}

export const refreshStore = () => {
    return {type: REFRESH_STORE};
}