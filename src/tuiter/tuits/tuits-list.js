import React from "react";
import {useSelector} from "react-redux";
import TuitItem from './tuit-item.js';
import TuitStats from "./tuit-stats.js";

const TuitsList = () => {
const postsArray = useSelector(state => state.tuits);
const statsArray = useSelector(state => state.tuits);
 return(
    <div>
        <ul className="list-group">
            {
            postsArray.map(post =>
                <TuitItem
                key={post._id} post={post}/> )
                
            }
        </ul>
        
    </div>
 );
};
export default TuitsList;