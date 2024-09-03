import ContactForm from "@/app/components/ui/contact-form";

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
                                <ContactForm/>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 col-pad2">
                            <div className="contact-details">
                                <h3>Opening Hours</h3>
                                <div className="ci-box d-flex">
                                    <div className="icon">
                                        <i className="fi fi-sr-marker"></i>
                                    </div>
                                    <div className="detail align-self-center">
                                        <h4>Office Address</h4>
                                        <p>8 The Green Ste 8545 Dover, DE 19901</p>
                                    </div>
                                </div>
                                <div className="ci-box d-flex">
                                    <div className="icon">
                                        <i className="fi fi-sr-phone-call"></i>
                                    </div>
                                    <div className="detail align-self-center">
                                        <h4>Phone Number</h4>
                                        <p>
                                            <a href="tel:+1-302-503-0000">+1-302-503-0000</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="ci-box d-flex">
                                    <div className="icon">
                                        <i className="fi fi-sr-envelope"></i>
                                    </div>
                                    <div className="detail align-self-center">
                                        <h4>Email Address</h4>
                                        <p>
                                            <a href="mailto:info@autoxv.com">info@autoxv.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
