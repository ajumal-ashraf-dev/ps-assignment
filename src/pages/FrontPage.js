import React from 'react';
import { useDispatch } from 'react-redux';

import * as newsActions from '../store/actions/news';

const FrontPage = () => {
    const dispatch = useDispatch();

    //Call dispatch on page change
    //dispatch(newsActions.getNews());
    return (
        <div>
        
        </div>
    );
}

export default FrontPage;
