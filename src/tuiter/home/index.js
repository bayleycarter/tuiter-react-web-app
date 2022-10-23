import React from "react";
import "./index.css";
import "../../vendors/fontawesome-free-6.2.0-web/css/all.css"
const HomeComponent = () => {
 return(
    <div>
        <div>
            <i class="fa fa-retweet ms-4"></i>
            <span class="wd-retweet-header ms-1"><b>Elon Musk Retweeted</b></span>
        </div>
        <div style={{width: '75%'}}>
                <img class="wd-avatar-image mt-2" alt="spacex"
                    src={require('../images/spacex.png')}/>
                <span class="wd-author-name"><b>SpaceX</b></span>
                <span class="wd-author-name ms-1"><i class="fa fa-check-circle" aria-hidden="true"></i></span>
                <span class="wd-author-handle">@SpaceX - 23h</span>
                <span class="mt-1" style={{float: 'right'}}><i class="fa-solid fa-ellipsis"></i></span>
        </div>
        <div>
            <p class="wd-bookmark-text">
                <br/><br/>
                Dennis and Akiko Tito  are the first two crewmembers on Starship's second
                commercial spaceflight around the Moon → <span style={{color: 'blue'}}>spacex.com/updates</span>
            </p>
        </div>

        <img class="wd-bookmark-image rounded"
        src={require("../images/tito.jpeg")} alt="tito couple"/>

        <div class="wd-bottom-box">
            <div>
                <i class="fa-regular fa-comment"></i>
                <span class="ms-2" style={{fontSize: '14px'}}>595</span>
            </div>
            <div>
                <i class="fa-solid fa-retweet"></i>
                <span class="ms-2" style={{fontSize: '14px'}}>1,168</span>
            </div>
            <div>
                <i class="fa-regular fa-heart"></i>
                <span class="ms-2" style={{fontSize: '14px'}}>11.1K</span>
            </div>
            <div>
                <i class="fa fa-share"></i>
            </div>
        </div>

        <p class="wd-thread mt-5">Show this thread</p>

        <hr class="mb-3"/>

        <div style={{width: '75%'}}>
                <img class="wd-avatar-image mt-2" alt="rocket"
                    src={require('../images/rocket.jpeg')}/>
                <span class="wd-author-name"><b>Elon Musk</b></span>
                <span class="wd-author-name ms-1"><i class="fa fa-check-circle" aria-hidden="true"></i></span>
                <span class="wd-author-handle">@elonmusk - 15h</span>
                <span class="mt-1" style={{float: 'right'}}><i class="fa-solid fa-ellipsis"></i></span>
        </div>
        <div>
            <p class="wd-bookmark-text">
                <br/><br/>
                We might need a different name, as this is basically just Starlink with roaming capability, so you can take your terminal anywhere.
            </p>
        </div>

        <div class="wd-retweet-box rounded">
        <div>
                <img class="wd-retweet-avatar mt-2 ms-2" alt="elon musk"
                    src={require('../images/spacex.png')}/>
                <span class="wd-author-name"><b>SpaceX</b></span>
                <span class="wd-author-name ms-1"><i class="fa fa-check-circle" aria-hidden="true"></i></span>
                <span class="wd-author-handle">@SpaceX - 16h</span>

        </div>
        <div>
            <p class="ms-3">
                <br/><br/>
                Starlink for RVs now has over 100,000 customers! Access high-speed, low-latency internet on an as-needed basis anywhere Starlink provides active coverage → starlink.com/rv
            </p>
        </div>
        </div>

        <div class="wd-bottom-box mb-3">
            <div>
                <i class="fa-regular fa-comment"></i>
                <span class="ms-2" style={{fontSize: '14px'}}>5,346</span>
            </div>
            <div>
                <i class="fa-solid fa-retweet"></i>
                <span class="ms-2" style={{fontSize: '14px'}}>1,601</span>
            </div>
            <div>
                <i class="fa-regular fa-heart"></i>
                <span class="ms-2" style={{fontSize: '14px'}}>19.2K</span>
            </div>
            <div>
                <i class="fa fa-share"></i>
            </div>
        </div>


    </div>
 );
};
export default HomeComponent;