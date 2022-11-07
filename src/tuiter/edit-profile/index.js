import React from "react";
import {useSelector} from "react-redux";
import EditProfile from "./edit-profile.js";

  const ProfileComponent = () => {
    const profileArray = useSelector(
                        (state) => state.profile);
  
    return(
      <ul className="list-group">
        {
          profileArray.map(profile =>
            <EditProfile
              profile={profile}/>
          )
        }
      </ul>
    );
   };
   
   export default ProfileComponent;