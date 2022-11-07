import React from "react";
import {Link} from "react-router-dom";
import "./index.css";

const ProfileItem = (
    { profile }
    ) => {
    return(
       <div>
           <i class="fa-solid fa-left-long float-start me-5 mt-2"></i>
           <h4><b>{profile.firstName} {profile.lastName}</b></h4>
           <p style={{marginLeft: '65px', marginTop: '-10px'}}>6,114 tuits</p>
            <div>
  
                <img className="wd-banner-img" src={require(`../images/${profile.bannerPicture}`)} />
                <img className="wd-profile-img" src={require(`../images/${profile.profilePicture}`)} />
                <Link to="/tuiter/edit-profile" className="wd-edit-profile float-end mt-2"><b>Edit Profile</b></Link>
                
                <div className="wd-profile-name"><b>{profile.firstName} {profile.lastName}</b></div>
                <div className="wd-profile-handle">{profile.handle}</div>
                <br/>
                <div className="wd-profile-bio">{profile.bio}</div>
                <div className="wd-profile-info">
                    <div style={{display: "flex"}}>
                        <i class="fa-solid fa-location-dot mt-2"></i>
                        <div className="ms-2 mt-1">{profile.location}</div>
                    </div>
                    <div>
                        <i style={{marginLeft: "-30px"}} className="fa-solid fa-cake-candles mt-2 me-5"></i>
                        <div style={{marginTop: "-25px"}}>{profile.dateOfBirth}</div>
                    </div>
                    <div>
                        <i style={{marginLeft: "-20px"}} className="fa-solid fa-calendar-days mt-2"></i>
                        <div style={{marginTop: "-25px", marginRight: "20px"}}>Joined {profile.dateJoined}</div>
                    </div>
                </div>
                <div className="wd-follow-info mt-2">
                    <div><b>{profile.followingCount}</b>  Following</div>
                    <div><b>{profile.followerCount}</b>  Followers</div>
                </div>
            </div>
       </div>
    );
   };
   export default ProfileItem;