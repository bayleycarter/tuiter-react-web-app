import React, {useEffect} from "react"; //eslint-disable-line react-hooks/exhaustive-deps
import {useDispatch, useSelector} from "react-redux";
import TuitItem from './tuit-item.js';
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitsList = () => {

const {tuits, loading} = useSelector(
    state => state.tuitsData)
   const dispatch = useDispatch();
   useEffect(() => {
     dispatch(findTuitsThunk())
   }, [])
   console.log(tuits)
  
 return(
     
    <div>
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map 
                && tuits.map(tuit => <TuitItem key={tuit._id} post={tuit}/>)
            }
        </ul>
    </div>
 );
};
export default TuitsList;