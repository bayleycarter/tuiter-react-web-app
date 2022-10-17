import PostSummaryItem from "./PostSummaryItem.js"

export default function PostSummary(exploreItems) {
    console.log(exploreItems)
    return exploreItems.map(i => PostSummaryItem(i)).join('')
}
