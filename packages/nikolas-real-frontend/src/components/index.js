import React from "react"
import {connect, Global, css, styled} from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"

import {Container, Nav, Navbar, Row, Col, Card, Jumbotron} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import List from "./list"
import Post from "./post"
import Page from "./page"

// TODO: integrate dynamic Menu fetched from WP API
// TODO: create more meaningful components

const Root = ({state}) => {

    const data = state.source.get(state.router.link)
    var currentDate = new Date()
    var thisYear = currentDate.getFullYear()
    const me = "Alexander Nikolas Reuber"
    var theYears = (2021 == thisYear) ? thisYear : '2021 - ' + thisYear

    const globalStyle = css`
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
                
                `

    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                crossOrigin="anonymous"
            />
            <Global
                styles={globalStyle}
            />
            <main>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand className="h1 mb-0 font-weight-bold" href="/">{me}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/page/2/">Page 2</Nav.Link>
                            <Nav.Link href="/about-me/">About me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
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
                <p>&copy; {theYears} {me}</p>
            </footer>
        </>
    )
}

export default connect(Root)

const Header = styled.header`
  background-color: #e5edee;
`