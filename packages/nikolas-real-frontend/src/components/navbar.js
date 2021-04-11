import React from "react";
import {connect} from "frontity";
import {Button, Nav, Navbar, Dropdown, ButtonGroup, ButtonToolbar} from 'react-bootstrap';

/**
 * Navigation Component
 *
 * It renders the navbar
 */


/**
 * Two level menu with dropdown as button group with split button
 */

const BsNavbar = ({state}) => {
    const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items
    const brandname = state.theme.brandname
    console.log('Menu ITEMS:', items)
    return (

        <Navbar bg="light" expand="lg">
            <Navbar.Brand className="h1 mb-0 font-weight-bold" href="/">{brandname}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" aria-label="toolbar">
                    <ButtonGroup>
                        {items.map((item) => {
                            // Make URL Object from item.url string
                            const itemFrontendUrl = new URL(item.url)
                            if (!item.child_items) {
                                return (
                                    // Only output pathname and has from URL
                                    <Button variant={"outline-secondary"} key={item.ID}
                                              href={itemFrontendUrl.pathname + itemFrontendUrl.hash}>{item.title}</Button>
                                )
                            } else {
                                const childItems = item.child_items
                                return (
                                    <Dropdown key={"dropdown" + item.ID} as={ButtonGroup} variant="outline-secondary">
                                        <Button key={item.ID}
                                                  href={itemFrontendUrl.pathname + itemFrontendUrl.hash}
                                                  variant={"outline-secondary"}
                                        >{item.title}</Button>
                                        <Dropdown.Toggle key={"dropdown-toggle" + item.ID} id={"dropdown-toggle" + item.ID}
                                                         split
                                                         variant={"outline-secondary"} />

                                        <Dropdown.Menu>
                                            {childItems.map((item) => {
                                                const childFrontendUrl = new URL(item.url)
                                                return (
                                                    <Dropdown.Item key={item.ID}
                                                                   href={childFrontendUrl.pathname + childFrontendUrl.hash}
                                                                       variant={"outline-secondary"}>{item.title}</Dropdown.Item>
                                                )
                                            })}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                )
                            }
                        })}
                    </ButtonGroup>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default connect(BsNavbar)