import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import "./Contact.css";

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message! We will contact you shortly.");
        e.target.reset();
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-grid">

                {/* Contact Info Side */}
                <div className="contact-info-side">
                    <div>
                        <span className="contact-label">Contact Us</span>
                        <h2 className="contact-title">
                            Get In Touch
                        </h2>
                        <p className="contact-desc">
                            Have questions or want to book an appointment? We'd love to hear from you.
                        </p>
                    </div>

                    <div className="info-items">
                        <div className="info-item">
                            <div className="icon-box">
                                <MapPin />
                            </div>
                            <div className="info-content">
                                <h4>Visit Us</h4>
                                <p>
                                    123, Luxury Complex, <br />
                                    SG Highway, Ahmedabad, Gujarat 380054
                                </p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box">
                                <Phone />
                            </div>
                            <div className="info-content">
                                <h4>Call Us</h4>
                                <p>
                                    +91 98765 43210 <br />
                                    +91 79 2640 xxxx
                                </p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box">
                                <Clock />
                            </div>
                            <div className="info-content">
                                <h4>Working Hours</h4>
                                <p>
                                    Mon - Sat: 10:00 AM - 8:00 PM <br />
                                    Sunday: 11:00 AM - 5:00 PM
                                </p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <a
                                href="https://wa.me/919876543210"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="whatsapp-btn"
                            >
                                <MessageCircle size={20} /> Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                {/* Form Side */}
                <div className="contact-form-side">
                    <h3 className="form-title">Send a Message</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-grid">
                            <div className="form-group">
                                <label className="form-label">Name</label>
                                <input type="text" required placeholder="Your Name" className="form-input" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Phone</label>
                                <input type="tel" required placeholder="Your Phone" className="form-input" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Service</label>
                            <select className="form-select">
                                <option>General Inquiry</option>
                                <option>Hair Styling</option>
                                <option>Makeup</option>
                                <option>Spa</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Message</label>
                            <textarea rows="4" placeholder="Tell us about your requirements..." className="form-textarea"></textarea>
                        </div>
                        <button type="submit" className="btn-submit">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117506.96803273188!2d72.48512166547672!3d23.02018179471191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bxxxx%3A0x1b2c3d4e5f6g7h8i!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
                ></iframe>
            </div>
        </section>
    );
}
