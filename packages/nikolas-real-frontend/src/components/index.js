import React from "react"
import {connect, Global, Head, css, styled} from "frontity"
import Switch from "@frontity/components/switch"

import {Container, Row, Col} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import List from "./list"
import Post from "./post"
import Page from "./page"
import Title from "./title"
import BsNavbar from "./navbar"
import Pagetitle from "./pagetitle";
import Loading from "./loading";
import PageError from "@frontity/mars-theme/src/components/page-error";

// TODO: create more meaningful components
// TODO: Router should process content links from wp

const Root = ({state}) => {
    // Retrieve data from frontity state of current link (url)
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]


    // Get current Date and set the year for use in footer
    let currentDate = new Date()
    let thisYear = currentDate.getFullYear()
    let theYears = (2021 == thisYear) ? thisYear : '2021 - ' + thisYear

    // Get Brandname from frontity theme state for use in Navbar
    const brandname = state.theme.brandname

    // Set styles path
    let bootstrapStyles = "https://nikolas-frontend-styles.vercel.app/css/nikolas-styles.css"
    return (
        <>
           <Title />
           <Head>
               {/* Super sweet! https://twitter.com/LeaVerou/status/1241619866475474946*/}
               <link
                    rel="icon"
                    href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 x=%22-.125em%22 font-size=%2289%22>🤓</text></svg>"
               />
               <meta name="description" content={state.frontity.description} />
               <html lang="de" />
                <link
                    rel="stylesheet"
                    href={bootstrapStyles}
                />
            </Head>

            <Global
                styles={globalStyle}
            />
            <main>
                <BsNavbar />
                <Pagetitle />
                <Container fluid="md">
                    <Row>
                        <Col>
                            <Switch>
                                <Loading when={data.isFetching} />
                                <List when={data.isArchive}/>
                                <Post when={data.isPost}/>
                                <Page when={data.isPage}/>
                                <PageError when={data.isError} />
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </main>
            <footer className="container">
                <hr/>
                <p>&copy; {theYears} {brandname}</p>
            </footer>
        </>
    )
}

export default connect(Root)

const globalStyle = css`
                  img {
                    max-width: 100%;
                  }
                ` // don't forget the backtick
