import React from 'react';

import './FrontPage.scss';
import Table from '../components/table/Table';
import Chart from '../components/chart/Chart';

const FrontPage = () => {
    return (
        <div className="container">
            <Table/>
            <Chart/>
        </div>
    );
}

export default FrontPage;
