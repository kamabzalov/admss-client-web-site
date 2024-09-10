'use client';

import Link from "next/link";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
    return (
        <>
            <header className="top-header" id="top-header-2">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-7 col-7">
                            <div className="list-inline">
                                <Link href="/">8 The Green Ste 8545 Dover, DE 19901</Link>
                                <a href="mailto:info@autoxv.com">info@autoxv.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-header sticky-header header-with-top d-lg-block d-none" id="main-header-4">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="header-left">
                            <Link href="/">Auto XV (Sample site)</Link>
                        </div>
                        <div className="header-centar">
                            <div className="navbar-collapse collapse" id="navbar">
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" href="/"
                                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link" href="/contacts">Contacts</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="header-right">
                            <div className="contact-now">
                                <div className="left">
                                    <i className="fi fi-sr-phone-call"></i>
                                </div>
                                <div className="right">
                                    <h5>Call Free</h5>
                                    <h4><a href="tel:+1-302-503-0000">+1-302-503-0000</a></h4>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <header className="main-header sticky-header header-with-top" id="main-header-4">
                <Navbar collapseOnSelect expand="lg" className="navbar">
                    <Container>
                        <Navbar.Brand href="/">Auto XV (Sample site)</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/contacts">Contacts</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}
