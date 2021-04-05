import React from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"

import List from "./list"
import Post from "./post"

const Root = ({ state }) => {

    const data = state.source.get(state.router.link)

    return (
        <>
        <h1>Hello Frontity from the root component!</h1>
        <pre>You are here: {state.router.link}</pre>

        <nav>
            <Link link="/">Home</Link>
            <br/>
            <Link link="/page/2">more Posts</Link>
            <br/>
            <Link link="/about-me">About me</Link>
        </nav>
        <hr/>
        <main>
            <Switch>
                <List when={data.isArchive} />
                <Post when={data.isPost} />
                <Post when={data.isPage} />
                <div when={data.isError}>ERROR this page was not found!</div>
            </Switch>
        </main>
        
        </>
    )
}

export default connect(Root)