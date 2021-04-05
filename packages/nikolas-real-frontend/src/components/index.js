import React from "react"
import { connect } from "frontity"

const Root = ({ state }) => {
    return (
        <>
        <h1>Hello Frontity from the root component!</h1>
        <pre>Current URL: {state.router.link}</pre>
        </>
    )
}

export default connect(Root)