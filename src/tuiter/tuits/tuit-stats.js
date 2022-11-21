import React from "react";
import {useDispatch, useSelector} from "react-redux";
import "../../vendors/fontawesome-free-6.2.0-web/css/all.css";
import {updateTuitThunk} from "../../services/tuits-thunks.js"
import './index.css'

const TuitStats = ({ tuit }) => {

    const dispatch = useDispatch();
    console.log(tuit.title)  
    const likedTuit = tuit.liked           

 return(
    <div style={{display: 'flex', position: 'relative', justifyContent: 'space-between', marginLeft: '75px', marginTop: '20px'}}>
            <span>
                {tuit.liked ?<i onClick={() => {dispatch(updateTuitThunk(
                    {
                        ...tuit,
                        likes: tuit.likes - 1,
                        liked: false
                    }
                ))} } id="heartLikes" className="fa fa-heart wd-heart-icon me-1" aria-hidden="true"/> 
                : <i onClick={() => {dispatch(updateTuitThunk(
                    {
                        ...tuit,
                        likes: tuit.likes + 1,
                        liked: true,
                    }
                ))}
                }  id="heartLikes" className="fa fa-heart me-1" aria-hidden="true"/>  }
                {tuit.likes}
            </span>



            <span>
                {tuit.disliked ?<i onClick={() => {dispatch(updateTuitThunk(
                    {
                        ...tuit,
                        dislikes: tuit.dislikes - 1,
                        disliked: false
                    }
                ))} } className="fa-solid fa-thumbs-down me-1 wd-heart-icon" aria-hidden="true"/> 
                : <i onClick={() => {dispatch(updateTuitThunk(
                    {
                        ...tuit,
                        dislikes: tuit.dislikes + 1,
                        disliked: true,
                    }
                ))}
                } className="fa-solid fa-thumbs-down me-1" aria-hidden="true"/>  }
                {tuit.dislikes}
            </span>

            <span>
                <i class="fa-regular fa-comment me-1"></i>
                {tuit.replies}
            </span>
        
            <span>
                <i class="fa-solid fa-retweet me-1"></i>
                {tuit.retuits}
            </span>
        <i class="fa-solid fa-share-nodes"></i>
  </div>
 );
};
export default TuitStats;
