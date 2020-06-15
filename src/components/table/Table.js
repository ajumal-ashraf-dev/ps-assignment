import React, { useEffect } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import {
    Link,
    useParams
} from "react-router-dom";

import './Table.scss';
import * as newsActions from '../../store/actions/news';

const Table = ({list}) => {
    const dispatch = useDispatch();
    const { page: currentPage } = useSelector(state => state.news);
    const { page: urlPage } = useParams();

    useEffect(() => {
        if(currentPage !== urlPage){
            dispatch(newsActions.getNews(urlPage));
        }
    },[dispatch, currentPage, urlPage])
    
    const getDomainName = (url) => {
        return url ? url.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0] : "";
    }

    const handleHide = (id) => {
        dispatch(newsActions.hidePost(id));
    }

    const handleUpvote = (id, e) => {
        e.preventDefault();
        dispatch(newsActions.upvotePost(id));
    }

    return <React.Fragment>
        <h1 className="sr-only">Hacker News</h1>
        <div className="table">
            <div className="table-head hidden-xs">
                <div>
                    Comments
                </div>
                <div>
                    Vote Count
                </div>
                <div>
                    UpVote
                </div>
                <div className="details-head">
                    News Details
                </div>
            </div>
            {
                list.map((item) => {
                    let pointLevel = 1;
                    
                    if(item.points < 80){
                        pointLevel = 2;
                    } else if(item.points < 100){
                        pointLevel = 3;
                    } else {
                        pointLevel = 4;
                    }

                    return <div key={item.objectID} className="table-row">
                        <div>
                            {item.num_comments}        
                        </div>
                        <div className={"level-" + pointLevel}>
                            {item.points}        
                        </div>
                        <div>
                            <a href="#" title="upvote" onClick={(e) => {handleUpvote(item.objectID, e)}} className="upvote-btn">
                                <i className="arrow-up"/>
                            </a>
                        </div>
                        <div className="mobile-btns">
                            <div>
                                <a href="#" title="upvote" onClick={(e) => {handleUpvote(item.objectID, e)}} className="upvote-btn">
                                    <img alt="upvote" src="../assets/iconmonstr-arrow-1.svg"/>
                                    {item.points}
                                </a>
                            </div>
                            <div>
                                <img alt="comment" src="../assets/iconmonstr-speech-bubble-15.svg"/>
                                {item.num_comments}        
                            </div>
                            <div>
                                <a href="#" onClick={() => {handleHide(item.objectID)}}>Hide</a>
                            </div>
                        </div>
                        <div className="details">
                            <a href={item.url} className="title">{item.title}</a>
                            {   
                                item.url ?
                                <a href={item.url} className="link">{getDomainName(item.url)}</a>:<span> </span>
                            }
                            <span className="by">by</span>
                            <a href="#" className="author">{item.author}</a>
                            <span className="time">{moment(item.created_at).fromNow()}</span>
                            <a href="#" onClick={() => {handleHide(item.objectID)}} className="hide-btn hidden-xs">hide</a>       
                        </div>
                    </div>
                })
            }
        </div>
        <div className="pagination">
            <Link to={currentPage === 0 ? "#" : "/page/" + (currentPage - 1)} className={currentPage === 0 ? "disabled":""}>Previous</Link>
            <span> | </span>
            <Link to={"/page/" + (currentPage + 1)}>Next</Link>
        </div>
    </React.Fragment>
}

export default Table;