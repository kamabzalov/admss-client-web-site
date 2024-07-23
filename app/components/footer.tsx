export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="footer-item clearfix">
                            <h4>
                                Contact Info
                            </h4>
                            <ul className="contact-info">
                                <li>
                                    20/F Green Road, Dhanmondi, Dhaka
                                </li>
                                <li>
                                    <a
                                        href="mailto:sales@hotelempire.com">info@themevessel.com</a>
                                </li>
                                <li>
                                    <a href="tel:+55-417-634-7071">+0477 85X6 552</a>
                                </li>
                                <li>
                                    +0477 85X6 552
                                </li>
                            </ul>
                            <div className="clearfix"></div>
                            <div className="social-list-2">
                                <ul>
                                    <li><a href="#" className="facebook-bg"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#" className="twitter-bg"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#" className="google-bg"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#" className="linkedin-bg"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                        <div className="footer-item">
                            <h4>
                                Useful Links
                            </h4>
                            <ul className="links">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="about.html">About Us</a>
                                </li>
                                <li>
                                    <a href="services.html">Services</a>
                                </li>
                                <li>
                                    <a href="faq.html">Faq</a>
                                </li>
                                <li>
                                    <a href="/contacts">Contact Us</a>
                                </li>
                                <li>
                                    <a href="car-comparison.html">Car Compare</a>
                                </li>
                                <li>
                                    <a href="car-reviews.html">Car Reviews</a>
                                </li>
                                <li>
                                    <a href="elements.html">Elements</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div className="recent-posts footer-item">
                            <h4>Recent Posts</h4>
                            <div className="d-flex mb-4 recent-posts-box">
                                <a href="car-details.html">
                                    <img className="flex-shrink-0 me-3" src="/assets/img/small-car-3.png"
                                         alt="small-car"/>
                                </a>
                                <div className="detail align-self-center">
                                    <h5>
                                        <a href="car-details.html">Bentley Continental GT</a>
                                    </h5>
                                    <div className="listing-post-meta">
                                        $345,00 | <a href="#">Jan 12, 2021</a>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex mb-4 recent-posts-box">
                                <a href="car-details.html">
                                    <img className="flex-shrink-0 me-3" src="/assets/img/small-car-1.png"
                                         alt="small-car"/>
                                </a>
                                <div className="detail align-self-center">
                                    <h5>
                                        <a href="car-details.html">Fiat Punto Red</a>
                                    </h5>
                                    <div className="listing-post-meta">
                                        $345,00 | <a href="#">Aug 24, 2021</a>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex recent-posts-box">
                                <a href="car-details.html">
                                    <img className="flex-shrink-0 me-3" src="/assets/img/small-car-2.png"
                                         alt="small-car"/>
                                </a>
                                <div className="detail align-self-center">
                                    <h5>
                                        <a href="car-details.html">Nissan Micra Gen5</a>
                                    </h5>
                                    <div className="listing-post-meta">
                                        $345,00 | <a href="#">Sep 24, 2021</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-3 col-md-6 col-sm-6">
                        <div className="footer-item clearfix">
                            <h4>Subscribe</h4>
                            <div className="Subscribe-box">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy sub-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p>© 2021 <a href="#">Theme Vessel.</a> Trademarks and brands are the property of their
                                respective owners.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
