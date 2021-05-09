import React from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"

const Page = ({ state }) => {

    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]
    const postid = 'page-' + page.id

    return (
        <div id={postid}>
            <div className="content" dangerouslySetInnerHTML={{ __html: page.content.rendered}} />
            <hr/>
        </div>
    )
}

export default connect(Page)