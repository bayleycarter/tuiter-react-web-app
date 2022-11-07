import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
 return (
     <div>
        <Link to="/labs" className={`list-group-item
            ${active === 'labs'?'active':''}`}>
            ← &nbsp;Back to Labs
        </Link>
        <div className="list-group">
            <a className="list-group-item">
                <i class="fa-brands fa-twitter"></i>
                &nbsp;Tuiter
            </a>
            <Link to="/tuiter/home" className={`list-group-item
                            ${active === 'home'?'active':''}`}>
                <i class="fa fa-house"></i>
                &nbsp;Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item
                            ${active === 'explore'?'active':''}`}>
                <i class="fa-solid fa-hashtag"></i>
                &nbsp;Explore
            </Link>
            <a href="#" className={`list-group-item
                            ${active === 'notifications'?'active':''}`}>
                <i class="fa-regular fa-bell"></i>
                &nbsp;Notifications
            </a>
            <a href="#" className={`list-group-item
                            ${active === 'messages'?'active':''}`}>
                <i class="fa-regular fa-envelope"></i>
                &nbsp;Messages
            </a>
            <a href="#" className={`list-group-item
                            ${active === 'bookmarks'?'active':''}`}>
                <i class="fa-regular fa-bookmark"></i>
                &nbsp;Bookmarks
            </a>
            <a href="#" className={`list-group-item
                            ${active === 'lists'?'active':''}`}>
                <i class="fa-solid fa-list"></i>
                &nbsp;Lists
            </a>     
            <Link to="/tuiter/profile" className={`list-group-item
                            ${active === 'profile'?'active':''}`}>
                <i class="fa-regular fa-user"></i>
                &nbsp;Profile
            </Link>
            <a href="#" className={`list-group-item
                            ${active === 'more'?'active':''}`}>
                <i class="fa-solid fa-ellipsis"></i>
                &nbsp;More
            </a>
        </div>
   </div>
 );
};
export default NavigationSidebar;