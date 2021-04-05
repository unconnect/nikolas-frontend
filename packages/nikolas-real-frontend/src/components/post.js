import React from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"

const Post = ({ state }) => {

    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]
    const postid = 'post-' + post.id

    return (
        <div id={postid}>
            <h2>{post.title.rendered}</h2>
            <div className="content" dangerouslySetInnerHTML={{ __html: post.content.rendered}} />
            <hr/>
            <Link link="/">back to home</Link>
        </div>
    )
}

export default connect(Post)