import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './FrontPage.scss';
import Table from '../components/table/Table';
import Chart from '../components/chart/Chart';
import * as newsActions from '../store/actions/news';

const FrontPage = () => {
    const dispatch = useDispatch();
    const { 
        list: newsList, 
        hiddenPosts,
        upvotes 
    } = useSelector(state => state.news);

    useEffect(() => {
        dispatch(newsActions.refreshStore());
    },[]);

    //Deep cloning
    let updatedList = newsList.map(obj => ({ ...obj }));
    updatedList = updatedList.filter(item => !hiddenPosts.includes(item.objectID)).map(item => {
        if(upvotes[item.objectID]){
            item.points += upvotes[item.objectID];
        }
        return item;
    });

    return (
        <div className="container">
            <Table list={updatedList}/>
            <Chart list={updatedList}/>
        </div>
    );
}

export default FrontPage;
