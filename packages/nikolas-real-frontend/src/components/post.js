import React from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"
import dayjs from "dayjs"

const Post = ({ state }) => {

    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]
    const postid = 'post-' + post.id
    const author = state.source.author[post.author]

    const formatedDate = dayjs(post.date).format("D. MMMM YYYY")

    return (
        <div id={postid}>
            <h2>{post.title.rendered}</h2>
            <div>
                <p>
                    Posted: {formatedDate} <br/>
                    Author: <Link link={author.link}>{author.name}</Link>
                </p>
            </div>
            <div className="content" dangerouslySetInnerHTML={{ __html: post.content.rendered}} />
            <hr/>
            <Link link="/">back to home</Link>
        </div>
    )
}

export default connect(Post) 