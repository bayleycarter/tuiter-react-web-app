const NavigationSidebar = (active) => {
    const handleEventtarget = () => {
        const target = event.target;
        $(target)
            .css('background-color', 'blue')
    }

    return(`

    <div>
    <nav class="navbar navbar-default bg-secondary">
    <ul class="nav navbar-nav">
        <li class="nav-item"> <i class="fab fa-twitter"></i></li>
       <li class="nav-item d-inline-flex align-items-center clickable">
            <i class="fa fa-home"></i>
            <span><a class="nav-link text-white ms-3" href="../HomeScreen/index.html">Home</a></span>
        </li>
       <li class="nav-item active d-inline-flex align-items-center">
            <i class="fa fa-hashtag active"></i>
            <a class="nav-link active text-white ms-3" href="../explore/index.html">Explore</a>
        </li>
       <li class="nav-item d-inline-flex align-items-center">
            <i class="fa fa-bell"></i>
            <a class="nav-link text-white ms-3" href="#">Notifications</a>
        </li>
       <li class="nav-item d-inline-flex align-items-center">
            <i class="fa fa-envelope"></i>
            <a class="nav-link text-white ms-3" href="#">Messages</a>
        </li>
       <li class="nav-item d-inline-flex align-items-center">
            <i class="fa fa-bookmark"></i>
            <a class="nav-link text-white ms-3" href="#">Bookmarks</a>
        </li>
       <li class="nav-item d-inline-flex align-items-center">
            <i class="fa fa-list"></i>
            <a class="nav-link text-white ms-3" href="#">Lists</a>
        </li>
       <li class="nav-item d-inline-flex align-items-center">
            <i class="fa fa-user"></i>
            <a class="nav-link text-white ms-3" href="#">Profile</a>
        </li>
       <li class="nav-item d-inline-flex align-items-center">
            <i class="fa fa-ellipsis"></i>
            <a class="nav-link text-white ms-3" href="#">More</a>
        </li>
    </ul>
    </div>

        <div class="d-grid mt-2">
            <a href="tweet.html"
                class="btn btn-primary btn-block rounded-pill">
            Tuit</a>
        </div>

    `);
   }
export default NavigationSidebar;