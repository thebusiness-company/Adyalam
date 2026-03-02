
import React, { useState } from "react";
import { API_BASE_URL } from "../../config";

const ContactInfo2 = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setSuccess(null);
      setError(null);
      try {
        const res = await fetch(`${API_BASE_URL}/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });
        if (!res.ok) {
          const errText = await res.text();
          throw new Error(errText || "Failed to submit");
        }
        setSuccess("Message sent successfully.");
        setName("");
        setEmail("");
        setMessage("");
      } catch (err) {
        setError(err.message || "Submission failed");
      } finally {
        setLoading(false);
      }
    };

    return (
      <div>
        <section className="contact-info-section fix section-padding">
          <div className="container">
            <div className="row g-4">
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="contact-info-items text-center active">
                  <div className="icon">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div className="content">
                    <h3>Our Address</h3>
                    <p>
                      200&201, 1st Floor, 1st Cross Rd, Sri Kapaleeswarar Nagar,
                      Neelankarai, Chennai, Tamil Nadu 600115
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="contact-info-items text-center">
                  <div className="icon">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div className="content">
                    <h3>
                      <a href="mailto:info@example.com">info@example.com</a>
                    </h3>
                    <p>
                      Email us anytime for anykind <br />
                      ofquety.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="contact-info-items text-center">
                  <div className="icon">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div className="content">
                    <h3>
                      Hot:<a href="tel:+2086660112">+208-666-2</a>
                    </h3>
                    <p>
                      Call us any kind suppor,we <br />
                      will wait for it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section-33 fix section-padding pt-0">
          <div className="container">
            <div className="contact-wrapper-2">
              <div className="row g-4 align-items-center">
                <div className="col-lg-6">
                  <div className="map-items">
                    <div className="googpemap">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3073.2148196690073!2d80.25482927380985!3d12.949385315367481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d9ead5abbdf%3A0xbdd6bcb13f60258a!2sThe%20Business%20Company!5e0!3m2!1sen!2sin!4v1772108883979!5m2!1sen!2sin"
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact-content">
                    <h2>Ready to Get Started?</h2>
                    <p>
                      Nullam varius, erat quis iaculis dictum, eros urna varius
                      eros, ut blandit felis odio in turpis. Quisque rhoncus,
                      eros in auctor ultrices,
                    </p>
                    <form id="contact-form" className="contact-form-items" onSubmit={handleSubmit}>
                      <div className="row g-4">
                        <div
                          className="col-lg-6 wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div className="form-clt">
                            <span>Your name*</span>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Your Name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div
                          className="col-lg-6 wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <div className="form-clt">
                            <span>Your Email*</span>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              placeholder="Your Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                        <div
                          className="col-lg-12 wow fadeInUp"
                          data-wow-delay=".7s"
                        >
                          <div className="form-clt">
                            <span>Write Message*</span>
                            <textarea
                              name="message"
                              id="message"
                              placeholder="Write Message"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                          </div>
                        </div>
                        <div
                          className="col-lg-7 wow fadeInUp"
                          data-wow-delay=".9s"
                        >
                          <button type="submit" className="theme-btn">
                            {loading ? "Sending..." : "Send Message"} <i className="bi bi-arrow-right"></i>
                          </button>
                        </div>
                        {success && (
                          <div className="col-12 mt-2 text-success">{success}</div>
                        )}
                        {error && (
                          <div className="col-12 mt-2 text-danger">{error}</div>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default ContactInfo2;