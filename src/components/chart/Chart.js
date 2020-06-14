import React from 'react';
import { useSelector } from 'react-redux';

import './Chart.scss';

const Chart = () => {
    const newsList = useSelector(state => state.news.list);
    return <div></div>
}

export default Chart;