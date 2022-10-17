export default function PostItem(posts) {
    console.log(posts)
    return(`

    <div>
        <div class="d-flex">
            <img class="d-flex" style="height: 48px; width:48px; border-radius: 25px" src="../images/${posts.avatarIcon}" />
            <div class="d-flex">
                <p class="wd-author-name ms-3"><b>${posts.userName}</b></p>
                <i class="fa fa-check-circle ms-1 mt-1" aria-hidden="true"></i>
                <p class="wd-author-handle ms-2">@${posts.handle} - ${posts.time}</p>
            </div>
        </div>
        <div class="d-flex">
            <p>${posts.caption}</p>
        </div>



        <div>
            <img class="border rounded-top border-secondary" style="height:100%; width:100%" src="../images/${posts.image}" />
                <div class="border rounded-bottom border-secondary" >
                    <p class="ms-3 mt-2">${posts.title}</p>
                    <p class="ms-3 text-secondary">${posts.description}</p>
                    <div class="mb-4 ms-3 text-secondary">
                        <span><i class="fa fa-link" aria-hidden="true"></i></span>
                        <span>${posts.link}</span>
                </div>
            </div>
        </div>
        <div class="mb-5 mt-3 d-flex justify-content-between text-secondary">
            <span>
                <i class="fa-regular fa-comment"></i>
                <span>${posts.comments}</span>
            </span>
            <span>
                <i class="fa fa-retweet"></i>
                <span>${posts.retuits}</span>
            </span>
            <span>
                <i class="fa fa-heart"></i>
                <span>${posts.likes}</span>
            </span>
            <span><i class="fa fa-arrow-up-from-bracket"></i></span>
        </div>
    </div>

    
    `)

}

$(PostItem)