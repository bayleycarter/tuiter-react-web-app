export default function PostSummaryItem(exploreItems){
    return(`
        <div class="d-flex justify-content-between bg-secondary">
            <div>
                <p class="wd-web-development">${exploreItems.topic}</p>
                <p class="wd-web-development text-white" style="margin-top: -20px;">
                    <b>${exploreItems.userName}</b>
                    <i class="fa fa-check-circle" aria-hidden="true"></i>
                    - ${exploreItems.time}
                </p>
                <p class="text-white ms-4">${exploreItems.title}</p>
                <p class="wd-web-development" style="margin-top:-10px; margin-bottom: 40px">123K Tuits</p>
            </div>
            <div>
                <img class="wd-main-content-img" src="../images/${exploreItems.image}" style="height: 100px; width: 90px; margin-right: 20px; margin-top: 10px" />
            </div>
        </div>
    `);
}

