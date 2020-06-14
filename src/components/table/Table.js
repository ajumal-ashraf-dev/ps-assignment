import React from 'react';

import './Table.scss';

const Table = (props) => {
    console.log(props.data);
    return <div className="table">
        <div className="table-head">
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
            props.data.map((item) => {
                return <div className="table-row">
                    <div>
                        36        
                    </div>
                    <div>
                        96        
                    </div>
                    <div>
                        <a href="#" title="upvote" className="upvote-btn">
                            <i className="arrow-up"/>
                        </a>
                    </div>
                    <div className="details">
                        Seemingly impossible Swift Programs
                        <a href="#">fewbutripe.com</a>
                        <span>by</span>
                        <a href="#">wool_gather</a>
                        <span>5 hours ago</span>
                        <a href="#">hide</a>       
                    </div>
                </div>
            })
        }
        <div className="table-row">
                    <div>
                        36        
                    </div>
                    <div>
                        96        
                    </div>
                    <div>
                        <a href="#" title="upvote" className="upvote-btn">
                            <i className="arrow-up"/>
                        </a>
                    </div>
                    <div className="details">
                        Seemingly impossible Swift Programs
                        <a href="#" className="link">fewbutripe.com</a>
                        <span className="by">by</span>
                        <a href="#" className="author">wool_gather</a>
                        <span className="time">5 hours ago</span>
                        <a href="#" className="hide-btn">hide</a>       
                    </div>
                </div>
        
    </div>
}

export default Table;