import React from "react";
import "./index.css";
import "../../vendors/fontawesome-free-6.2.0-web/css/all.css";
import TuitsList from "../tuits/tuits-list.js";
import WhatsHappening from "./whats-happening.js"
const HomeComponent = () => {
 return(
    <div>
        <h4>Home</h4>
        <WhatsHappening/>
        <TuitsList/>
    </div>
 );
};
export default HomeComponent;