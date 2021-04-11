import React from "react"
import {connect, Global, Head, css, styled} from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"

import {Container, Row, Col, Card, Jumbotron} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import List from "./list"
import Post from "./post"
import Page from "./page"
import Title from "./title"
import BsNavbar from "./navbar"

// TODO: create more meaningful components

const Root = ({state}) => {
    // Retrieve data from frontity state of current link (url)
    const data = state.source.get(state.router.link)

    // Get current Date and set the year for use in footer
    var currentDate = new Date()
    var thisYear = currentDate.getFullYear()
    var theYears = (2021 == thisYear) ? thisYear : '2021 - ' + thisYear

    // Get Brandname from frontity theme state for use in Navbar
    const brandname = state.theme.brandname

    return (
        <>
           <Title />
           <Head>
               // TODO: Include with defer or async or maybe totally different. Do more research!
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                    crossOrigin="anonymous"
                />
            </Head>

            <Global
                styles={globalStyle}
            />
            <main>
                <BsNavbar />
                <Jumbotron className="rounded-0">
                    <Container>
                        <Row>
                            <Col>
                                <h1>Hello Frontity from the root component!</h1>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <Container fluid="md">
                    <Row>
                        <Col>
                            <Switch>
                                <List when={data.isArchive}/>
                                <Post when={data.isPost}/>
                                <Page when={data.isPage}/>
                                <div when={data.isError}>ERROR this page was not found!</div>
                            </Switch>
                        </Col>
                    </Row>
                    <hr/>
                </Container>
            </main>
            <footer className="container">
                <p>&copy; {theYears} {brandname}</p>
            </footer>
        </>
    )
}

export default connect(Root)

const globalStyle = css`
                  // TODO: this should be done with fontloader, 
                  // see https://github.com/frontity-demos/frontity-examples/tree/master/demo-using-google-fonts
                  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,600;0,900;1,300;1,400;1,600;1,900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');

                  html {
                    font-family: "Fira Sans", system-ui, Arial, sans-serif;
                  }

                  h1, h2, h3, h4, h5, h6 {
                    font-family: "Merriweather";
                  }

                  p, a, ol, ul, a {

                  }
      
                  img {
                    max-width: 100%;
                  }
                ` // don't forget the backtick
