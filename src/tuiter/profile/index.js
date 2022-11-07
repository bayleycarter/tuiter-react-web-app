import React from "react";
import {useSelector} from "react-redux";
import ProfileItem from "./profile-item.js";

  const ProfileComponent = () => {
    const profileArray = useSelector(
                        (state) => state.profile);
  
    return(
      <ul className="list-group">
        {
          profileArray.map(profile =>
            <ProfileItem
              profile={profile}/>
          )
        }
      </ul>
    );
   };
   
   export default ProfileComponent;