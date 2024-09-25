export default function Contact() {
    return (
        <div id="contact" className="section-bg wow fadeInUp">
            <div className="container">
                <div className="section-header">
                    <h3>Contact Us</h3>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="contact-detail">
                            <div className="contact-hours">
                                <h4>Opening Hours</h4>
                                <p>Monday-Friday: 9am to 7pm</p>
                                <p>Saturday: 9am to 4pm</p>
                                <p>Sunday: Closed</p>
                            </div>

                            <div className="contact-info">
                                <h4>Contact Info</h4>
                                <p>4137  State Street, CA, USA</p>
                                <p><a href="tel:+1-234-567-8900">+1-234-567-8900</a></p>
                                <p><a href="mailto:info@example.com">info@example.com</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="fish"> <img src="/img/fish.jpg" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}