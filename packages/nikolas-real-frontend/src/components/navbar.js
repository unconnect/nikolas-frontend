import React from "react";
import { connect } from "frontity";
import {Nav, Navbar} from 'react-bootstrap';


/**
 * Navigation Component
 *
 * It renders the navbar
 */


/**
 * One level menu (no child menus)
 */

const BsNavbar = ({ state }) => {
    const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items
    const brandname = state.theme.brandname
    console.log('Menu ITEMS:', items)
    return (

        <Navbar bg="light" expand="lg">
            <Navbar.Brand className="h1 mb-0 font-weight-bold" href="/">{brandname}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {items.map((item) => {
                        // Make URL Object from item.url string
                        const frontendUrl = new URL(item.url)
                        return (
                            // Only output pathname and has from URL
                            <Nav.Link key={item.ID} href={frontendUrl.pathname + frontendUrl.hash}>{item.title}</Nav.Link>
                        )
                    })}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

/**
 * Two level menu (with one level of child menus)
 */
// const Navbar = ({ state }) => {
//     const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;
//     // console.log('ITEMS:',items)
//     return (
//         <NavContainer>
//             {items.map((item) => {
//                 if (!item.child_items) {
//                     return (
//                         <NavItem key={item.ID}>
//                             <Link link={item.url}>{item.title}</Link>
//                         </NavItem>
//                     );
//                 } else {
//                     const childItems = item.child_items;
//                     return (
//                         <NavItemWithChild key={item.ID}>
//                             <NavItem>
//                                 <Link link={item.url}>{item.title}</Link>
//                             </NavItem>
//                             <ChildMenu>
//                                 {childItems.map((childItem) => {
//                                     return (
//                                         <NavItem key={childItem.ID}>
//                                             <Link link={childItem.url}>{childItem.title}</Link>
//                                         </NavItem>
//                                     );
//                                 })}
//                             </ChildMenu>
//                         </NavItemWithChild>
//                     );
//                 }
//             })}
//         </NavContainer>
//     );
// };

export default connect(BsNavbar);