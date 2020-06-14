import axios from 'axios';

export const GET_NEWS = "GET_NEWS";

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