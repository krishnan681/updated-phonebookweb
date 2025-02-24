
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
 
import "../Css/Contactus.css"; // Import styles if needed
 
const ContactCard = () => {
  return (
    <section className="ftco-section">
    <Container className="fullcontent" >
      <Row className="justify-content-center">
        <Col md={6} className="text-center mb-5 contact-name">
          <h2 className="heading-section">Contact Us</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={12}>
          <div className="wrapper">
            <Row className="no-gutters">
              <Col lg={8} md={7} className="order-md-last d-flex align-items-stretch">
                <div className="contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-4">Get in touch</h3>
                  <div id="form-message-warning" className="mb-4"></div>
                   
                  <Form id="contactForm" name="contactForm" className="contactForm">
                    <Row>
                      <Col md={6}>
                        <Form.Group className="naame  mb-3">
                          <Form.Label>Full Name</Form.Label>
                          <Form.Control type="text" name="name" id="name" placeholder="Name" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className=" emaail mb-3">
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control type="email" name="email" id="email" placeholder="Email" />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group className="mb-3">
                          <Form.Label>Subject</Form.Label>
                          <Form.Control type="text" name="subject" id="subject" placeholder="Subject" />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group className="mb-3">
                          <Form.Label>Message</Form.Label>
                          <Form.Control as="textarea" name="message" id="message" rows={4} placeholder="Message" />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group className="submiting mb-3">
                          <Button type="submit" className="btn btn-primary">Send Message</Button>
                          <div className="submitting"></div>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
              <Col lg={4} md={5} className="d-flex align-items-stretch">
                <div className="info-wrap bg-primary w-100 p-md-5 p-4">
                  <h3>Let's get in touch</h3>
                  <p className="mb-4">We're open for any suggestion or just to have a chat</p>
                  <div className="dbox w-100 d-flex align-items-start">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <i className="fas fa-map-marker-alt"></i> {/* Address Icon */}
                    </div>
                    <div className="text pl-3">
                      <p><span>Address:</span> Signpost Celfone.In Technology <br /> 46, SIDCO Industrail Estate, Coimbatore - 641 021 </p>
                    </div>
                  </div>
                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <i className="fas fa-phone-alt"></i> {/* Phone Icon */}
                    </div>
                    <div className="text pl-3">
                      <p><span>Phone : 9786889092</span> <a href="tel://9786889092"></a> | 9843657564  <a href="tel://9843657564"></a> </p>
                    </div>
                  </div>
                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <i className="fas fa-envelope"></i> {/* Email Icon */}
                    </div>
                    <div className="text pl-3">
                      <p><span>Email:</span>  <a href="mailto:signpostcelfon.intech@gmail.com">signpostcelfon.intech@gmail.com</a></p>
                    </div>
                  </div>
                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <i className="fas fa-globe"></i> {/* Website Icon */}
                    </div>
                    <div className="text pl-3">
                      <p><span>Website</span> <a href="#">signpostphonebook.in</a></p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  );
};

export default ContactCard;






























// import React, { useState } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const response = await fetch("https://signpostphonebook.in/contact_email_messages.php", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
  
//       const result = await response.text();
//       console.log(result);
  
//       if (result === "success") {
//         setStatus("Message sent successfully!");
//         setFormData({ name: "", email: "", subject: "", message: "" });
//       } else {
//         setStatus("Failed to send message. Try again.");
//       }
//     } catch (error) {
//       console.error("Error sending email:", error);
//     }
//   };
  

//   return (
//     <div>
//       <h2>Contact Us</h2>
//       {status && <p>{status}</p>}
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
//         <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
//         <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
//         <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
//         <button type="submit">Send Message</button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;


