import PostItem from "./PostItem.js"

export default function PostItemList(posts) {
    console.log(posts)
    return posts.map(i => PostItem(i)).join('')
}