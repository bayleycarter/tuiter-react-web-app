import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./index.css";
import {Link, useNavigate} from "react-router-dom";
import {changeValue} from "./edit-profile-reducer.js"



  const EditProfile = ( {profile} ) => {



    let [firstName, setFirstName] = useState(profile.firstName)
    let [lastName, setLastName] = useState(profile.lastName)
    let [bio, setBio] = useState(profile.bio)
    let [location, setLocation] = useState(profile.location)
    let [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth)
    let [website, setWebsite] = useState(profile.website)
    const thisProf = useSelector(state => state.profile)
    let [thisProfile, setThisProfile] = useState(thisProf)


    function changeName (event) {
      const firstAndLastName = event.target.value;
      firstAndLastName = firstAndLastName.split(' ');
      setFirstName(firstAndLastName[0]);
      setLastName(firstAndLastName[1]);

      const update = {
        ...thisProfile,
        firstName: firstName,
        lastName: lastName
      }
      setThisProfile(update)
    }

    function changeBio (event) {
      const updateBio = event.target.value;
      setBio(updateBio)
      const update = {
        ...thisProfile,
        bio: updateBio
      }
      setThisProfile(update)
    }

    function changeLocation (event) {
      const updateLocation = event.target.value;
      setLocation(updateLocation)
      const update = {
        ...thisProfile,
        location: updateLocation
      }
      setThisProfile(update)
    }

    function changeWebsite (event) {
      const updateWebsite = event.target.value;
      setWebsite(updateWebsite)
      const update = {
        ...thisProfile,
        website: updateWebsite
      }
      setThisProfile(update)
    }

    function changeDateOfBirth (event) {
      const updateDateOfBirth = event.target.value;
      setDateOfBirth(updateDateOfBirth)
      const update = {
        ...thisProfile,
        dateOfBirth: updateDateOfBirth
      }
      setThisProfile(update)
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const changeProfileValue = (event) => {
      dispatch(changeValue({
        ...thisProfile,
        firstName: firstName,
        lastName: lastName,
        bio: bio,
        location: location,
        website: website
      }))
      navigate(-1);
    }
    
      return (
        <div>
           <button className="wd-save-button float-end mb-3" onClick={(event) => {changeProfileValue(event)}}><b>Save</b></button> 
           <button className="wd-back-button" onClick={() => navigate(-1)}><i class="fa-solid fa-xmark float-start me-5 mt-2"></i></button>
           <h4 className="mt-1"><b>Edit Profile</b></h4><div>
                <img className="wd-banner-img" src={require(`../images/${profile.bannerPicture}`)} />
                <img className="wd-profile-img" src={require(`../images/${profile.profilePicture}`)} />
            </div>

          <div className="row">
            <div className="col-10">
            <label for="name-area">Name</label>
                <textarea value={firstName + ' ' + lastName} name="name-area"
                  className="form-control border-1"
                  onChange={(event) => changeName(event)}>
                </textarea>
                <br/>
                <label for="name-area" className="mt-2">Bio</label>
                <textarea value={bio} placeholder={bio} name="bio-area"
                  className="form-control border-1"
                  onChange={(event) => changeBio(event)}>
                </textarea>
                <br/>
                <label for="location-area" className="mt-2">Location</label>
                <textarea value={location} name="location-area"
                  className="form-control border-1"
                  onChange={(event) => changeLocation(event)}>
                </textarea>
                <br/>
                <label for="website-area" className="mt-2">Website</label>
                <textarea value={website} name="website-area"
                  className="form-control border-1"
                  onChange={(event) => changeWebsite(event)}>
                </textarea>
                <br/>
                <label for="dob-area" className="mt-2">Date of Birth</label>
                <textarea value={dateOfBirth} name="dob-area"
                  className="form-control border-1"
                  onChange={(event) => changeDateOfBirth(event)}>
                </textarea>
            </div>
          </div>
        </div>
      )
  }
   export default EditProfile;