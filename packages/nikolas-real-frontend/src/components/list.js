import React from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"

const List = ({ state }) => {
    const data = state.source.get(state.router.link)

    return (
        <div>
            {data.items.map((item) => {
                const post = state.source[item.type][item.id]
                const postid = "post-" + post.id
                return (
                    <div id={postid} key={post.id}>
                        <Link key={item.id} link={post.link}>
                            {post.title.rendered}: {post.type} - {post.id} - {post.link}
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default connect(List)