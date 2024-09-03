'use client'

import { Contact } from "@/app/models/contact";
import { sendContactForm } from "@/app/http";

export default function ContactForm() {

    const sendContact = async (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const contact: Contact = {
            topic: formData.get('topic') as string,
            message: formData.get('message') as string,
            nickname: formData.get('nickname') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
        }
        await sendContactForm(contact)

    }

    return (
        <form onSubmit={sendContact}>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group name">
                        <input required type="text" name="nickname" className="form-control"
                               placeholder="Name" aria-label="Full Name"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group email">
                        <input required type="email" name="email" className="form-control"
                               placeholder="Email Address" aria-label="Email Address"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group subject">
                        <input required type="text" name="topic" className="form-control"
                               placeholder="Subject" aria-label="Subject"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group number">
                        <input required type="text" name="phone" className="form-control"
                               placeholder="Phone" aria-label="Phone Number"/>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group message">
                                                <textarea required className="form-control" name="message"
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
    )
}
