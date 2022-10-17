
import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummary from "../PostSummaryList/index.js";
import exploreItems from "../PostSummaryList/posts.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";
import whoData from "../WhoToFollowList/who.js";


function exploreComponent() {
   $('#wd-explore').append(`

        <div class="row">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar()}
            </div>
            <div class="col-10 col-lg-7 col-xl-6 text-white">
                ${ExploreComponent()}
                ${PostSummary(exploreItems)}
            </div>
            <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 text-white">
                ${WhoToFollowList(whoData)}
            </div>
        </div>
   `);
}
$(exploreComponent);