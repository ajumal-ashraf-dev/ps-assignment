import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './FrontPage.scss';
import Table from '../components/table/Table';
import Chart from '../components/chart/Chart';
import * as newsActions from '../store/actions/news';

const FrontPage = () => {
    const dispatch = useDispatch();
    const newsList = useSelector(state => state.news.list);

    //Call dispatch on page change
    //dispatch(newsActions.getNews());

    return (
        <div className="container">
            <Table data={newsList}/>
            <Chart data={newsList}/>
        </div>
    );
}

export default FrontPage;
