import Link from "next/link";

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
                                    8 The Green Ste 8545 Dover, DE 19901
                                </li>
                                <li>
                                    <a href="mailto:info@autoxv.com">info@autoxv.com</a>
                                </li>
                                <li>
                                    <a href="tel:+1-302-503-0000">+1-302-503-0000</a>
                                </li>
                            </ul>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                        <div className="footer-item">
                            <h4>
                                Useful Links
                            </h4>
                            <ul className="links">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/contacts">Contacts</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
