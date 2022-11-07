import React from "react";
import "../../vendors/fontawesome-free-6.2.0-web/css/all.css";
import './index.css'

const TuitStats = ({ post }) => {
    // console.log(post.likes)
 return(
    <div style={{display: 'flex', position: 'relative', justifyContent: 'space-between', marginLeft: '75px', marginTop: '20px'}}>
        <i class="fa-solid fa-heart" style={{color: 'red'}}></i>
        {/* <div>{post.likes}</div> */}
        <i class="fa-regular fa-comment"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-share-nodes"></i>
  </div>
 );
};
export default TuitStats;
