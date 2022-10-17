import WhoToFollowListItem from "./WhoToFollowListItem.js"

export default function WhoToFollowList(whoData) {
    return whoData.map(i => WhoToFollowListItem(i)).join('')
}

