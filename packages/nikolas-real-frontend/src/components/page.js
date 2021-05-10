import React, {useEffect} from "react"
import { connect } from "frontity"

const Page = ({ state, actions, libraries }) => {

    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]
    const postid = 'page-' + page.id

    // Get the html2react component.
    const Html2React = libraries.html2react.Component;

    /**
     * Once the post has loaded in the DOM, prefetch both the
     * home posts and the list component so if the user visits
     * the home page, everything is ready and it loads instantly.
     */
    useEffect(() => {
        actions.source.fetch("/*");
    }, []);

    return data.isReady ? (
        <Html2React html={page.content.rendered} />
    ) : null;
};

export default connect(Page)