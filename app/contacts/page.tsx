export default function Page() {
    return (
        <div className="contact-1 content-area-5">
            <div className="container">
                <div className="main-title text-center">
                    <h1 className="mb-10">Get In Touch</h1>
                    <div className="title-border">
                        <div className="title-border-inner"></div>
                        <div className="title-border-inner"></div>
                        <div className="title-border-inner"></div>
                        <div className="title-border-inner"></div>
                        <div className="title-border-inner"></div>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="row g-0">
                        <div className="col-lg-7 col-md-12 col-sm-12 col-pad2">
                            <div className="contact-form contact-pad">
                                <h3>Send us a Message</h3>
                                <form id="contact_form">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group name">
                                                <input type="text" name="name" className="form-control"
                                                       placeholder="Name" aria-label="Full Name"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group email">
                                                <input type="email" name="email" className="form-control"
                                                       placeholder="Email Address" aria-label="Email Address"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group subject">
                                                <input type="text" name="subject" className="form-control"
                                                       placeholder="Subject" aria-label="Subject"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group number">
                                                <input type="text" name="phone" className="form-control"
                                                       placeholder="Phone" aria-label="Phone Number"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group message">
                                                <textarea className="form-control" name="message"
                                                          placeholder="Write message"
                                                          aria-label="Write message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="send-btn text-center">
                                                <button type="submit" className="btn-6">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 col-pad2">
                            <div className="contact-details">
                                <h3>Opening Hours</h3>
                                <div className="ci-box d-flex">
                                    <div className="icon">
                                        <i className="fa fa-map-marker"></i>
                                    </div>
                                    <div className="detail align-self-center">
                                        <h4>Office Address</h4>
                                        <p>20/F Green Road, Dhanmondi, Dhaka</p>
                                    </div>
                                </div>
                                <div className="ci-box d-flex">
                                    <div className="icon">
                                        <i className="fa fa-phone"></i>
                                    </div>
                                    <div className="detail align-self-center">
                                        <h4>Phone Number</h4>
                                        <p>
                                            <a href="tel:0477-0477-8556-552">Office: 0477 8556 552</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="ci-box d-flex">
                                    <div className="icon">
                                        <i className="fa fa-envelope"></i>
                                    </div>
                                    <div className="detail align-self-center">
                                        <h4>Email Address</h4>
                                        <p>
                                            <a href="mailto:info@themevessel.com">info@themevessel.com</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="ci-box d-flex mb-40">
                                    <div className="icon">
                                        <i className="fa fa-fax"></i>
                                    </div>
                                    <div className="detail align-self-center">
                                        <h4>Fax:</h4>
                                        <p>
                                            <a href="tel:0477-0477-8556-552">0477 8556 552</a>
                                        </p>
                                    </div>
                                </div>
                                <h3>Follow Us</h3>
                                <ul className="social-list clearfix">
                                    <li>
                                        <a href="#" className="facebook-bg">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="twitter-bg">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="linkedin-bg">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="google-bg">
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="rss-bg">
                                            <i className="fa fa-rss"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
