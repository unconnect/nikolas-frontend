import React from "react";
import {connect} from "frontity";
import Link from "@frontity/components/link";
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

        <Navbar bg="dark" variant="dark" fixed={"top"} expand="md">
            <Link className={'navbar-brand h1 mb-0 font-weight-bold'} link="/">{brandname}</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" aria-label="toolbar">
                    <ul className="navbar-nav mr-auto">
                        {items.map((item) => {
                            // Make URL Object from item.url string
                            const itemFrontendUrl = new URL(item.url)
                            const isCurrent = (itemFrontendUrl.pathname == state.router.link) ? "active" : ""
                            if (!item.child_items) {
                                return (
                                    // Only output pathname and has from URL
                                    <li className={`nav-item ${isCurrent}`} key={item.ID}>
                                        <Link className={"nav-link"}
                                              link={itemFrontendUrl.pathname + itemFrontendUrl.hash}>{item.title}</Link>
                                    </li>
                                )
                            } else {
                                const childItems = item.child_items
                                return (
                                    <li className="nav-item" key={item.ID}>
                                    <Dropdown key={"dropdown" + item.ID} as={ButtonGroup} variant="default">
                                        <Link key={item.ID}
                                                  link={itemFrontendUrl.pathname + itemFrontendUrl.hash}
                                              className={`nav-link ${isCurrent}`}
                                        >{item.title}</Link>
                                        <Dropdown.Toggle key={"dropdown-toggle" + item.ID} id={"dropdown-toggle" + item.ID}
                                                         split
                                                         variant={"link"} />

                                        <Dropdown.Menu>
                                            {childItems.map((item) => {
                                                const childFrontendUrl = new URL(item.url)
                                                return (
                                                    <Link key={item.ID}
                                                          link={childFrontendUrl.pathname + childFrontendUrl.hash}
                                                          className={`dropdown-item ${isCurrent}`}>{item.title}</Link>
                                                )
                                            })}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default connect(BsNavbar)