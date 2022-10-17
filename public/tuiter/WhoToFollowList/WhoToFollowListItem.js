export default function WhoToFollowListItem(whoData){
    return(`
        <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
            <div class="d-flex align-items-center" style="font-size: 12px; width:100%">
                <img src="../images/${whoData.avatarIcon}" style="height: 48px; width:48px; border-radius: 25px"/>
                <p style="margin-top: 13px">
                    <b>${whoData.userName}</b>
                    <i class="fa fa-check-circle" aria-hidden="true"></i>
                    <br/>
                    <span style="color:rgb(168, 175, 180)">${whoData.handle}</span>
                </p>
                <div class="d-flex">
                <button class="p-2 ms-3" style="background-color: dodgerblue; border: transparent; border-radius: 25px">Follow</button>
            </div>
            </div>
        </div>
    `);
}

$(WhoToFollowListItem)