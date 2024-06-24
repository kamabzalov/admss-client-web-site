export default function Header() {
    return (
        <header className="top-header" id="top-header-2">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-7 col-7">
                        <div className="list-inline">
                            <a href="#"><i className="fa fa-map-marker"></i> 121 King Street, Melbourne</a>
                            <a href="tel:info@themevessel.com" className="d-none-768"><i className="fa fa-envelope"></i>info@themevessel.com</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-5 col-5">
                        <ul className="top-social-media pull-right">
                            <li>
                                <a href="#" className="sign-in"><i className="fa fa-sign-in"></i> Login</a>
                            </li>
                            <li>
                                <a href="#" className="sign-in"><i className="fa fa-user"></i> Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="main-header sticky-header header-with-top" id="main-header-4">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="header-left">
                        <a href="#">Home</a>
                    </div>
                    <button className="navbar-toggler" id="drawer" type="button">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="header-centar">
                        <div className="navbar-collapse collapse" id="navbar">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown active">
                                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="/contacts">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="contact-now">
                            <div className="left">
                                <i className="fa fa-phone"></i>
                            </div>
                            <div className="right">
                                <h5>Call Free</h5>
                                <h4><a href="tel:+55-4XX-634-7071">+01-325-2184</a></h4>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
