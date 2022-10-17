import PostSummary from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
    
        <div class="d-flex align-items-center mt-2">
            <p class="wd-search-bar">
                <i class="fa fa-search ms-2" aria-hidden="true"></i>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search Tuitter
            </p>
        </div>
        <div class="d-flex align-items-center" style="color: dodgerblue; margin-left: 500px; margin-top: -50px">
            <i class="fa fa-cog fa-2x" aria-hidden="true"></i></span>
        </div>
        <ul class="nav mb-2 nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For You</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link d-none d-sm-block" href="entertainment.html">Entertainment</a>
            </li>
        </ul>
        <div style="position: relative">
            <img class="wd-starship-img" src="../images/starship.jpeg"/>
            <p class="wd-img-text" style="font-size: 2vw;"><b>SpaceX's Starship</b></p>
        </div>

    `);
}

export default ExploreComponent;
