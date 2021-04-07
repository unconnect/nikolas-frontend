import React from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"

const Page = ({ state }) => {

    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]
    const postid = 'page-' + page.id

    return (
        <div id={postid}>
            <h2>{page.title.rendered}</h2>
            <div className="content" dangerouslySetInnerHTML={{ __html: page.content.rendered}} />
            <hr/>
            <Link link="/">back to home</Link>
        </div>
    )
}

export default connect(Page)