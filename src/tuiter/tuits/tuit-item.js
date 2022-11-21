import React from "react";
import "../../vendors/fontawesome-free-6.2.0-web/css/all.css";
import TuitStats from './tuit-stats.js';
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks.js";

const TuitItem = (
 { post }
) => {
 const dispatch = useDispatch();
 const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
}

 return(
     <div>
    <li className="list-group-item">
    <div className="row">
        <div className="col-10">
        <i className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(post._id)}></i>
            <img width={50} height={50} className="float-start me-4 rounded-5" src={(`../images/${post.image}`)} alt="avatar image"/>
        
            <div style={{paddingLeft: 50}}>
            <b>{post.userName}</b>
            <i class="fa fa-check-circle ms-2 me-2" aria-hidden="true"></i>
            {post.handle} - {post.time}
            
            </div>
            <div style={{marginLeft: 75}}>{post.tuit}</div>
            <TuitStats tuit={post}/>
            {/* <div style={{marginRight: '10px', display: 'flex', position: 'relative', justifyContent: 'space-between', width: '70%', marginTop: '-20px', marginLeft: '70px'}}>
                <div style={{marginLeft: '30px'}}>{post.likes}</div>
                <div style={{marginLeft: '0px'}}>{post.retuits}</div>
                <div style={{marginLeft: '-10px'}}>{post.replies}</div>
                
            </div> */}

        </div>
    </div>
    </li>
  </div>
 );
};
export default TuitItem;