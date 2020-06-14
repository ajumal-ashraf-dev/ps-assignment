import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './FrontPage.scss';
import Table from '../components/table/Table';
import Chart from '../components/chart/Chart';
import * as newsActions from '../store/actions/news';

const FrontPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(newsActions.refreshStore());
    },[]);

    return (
        <div className="container">
            <Table/>
            <Chart/>
        </div>
    );
}

export default FrontPage;
