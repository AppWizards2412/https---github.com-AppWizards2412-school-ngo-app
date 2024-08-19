import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './contact-style.css'; // Assuming CSS is in the same folder
import './contact-print.css'; // Assuming CSS is in the same folder
import AOS from 'aos';

const Contact = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
  }, []);

  return (
    <div>
      {/* Banner */}
      <div className="container-fluid" id="banner">
        <div className="row">
          <div className="col-12 text-center my-5 py-5">
            <h4 className="my-md-4">CONTACT US</h4>
            <h1 className="my-md-4 mb-4">DON'T BE SHY</h1>
            <a href="#!">Send a Message</a>
            <a href="#!">Make a Call</a>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="container">
        <div className="row py-5">
          <div className="col-md-5 ps-md-5" id="contact">
            <img src="assets/love-icon.png" alt="Love Icon" width="20px" />
            <p>CONTACT WITH US</p>
            <h1>
              Get In Touch <br /> With Us
            </h1>
            <p className="mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero a, hic corporis veniam repudiandae
              exercitationem necessitatibus, unde labore perspiciatis incidunt reiciendis minima odit, quod enim amet quis
              aperiam officia nesciunt!
            </p>
            <a href="#!"><i className="fa-brands fa-twitter"></i></a>
            <a href="#!"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#!"><i className="fa-brands fa-instagram"></i></a>
              <a href="#!"><i className="fa-brands fa-pinterest-p"></i></a>
            </div>
            <div className="col-md-7 text-center p-md-5 px-2" id="con_form">
              <input type="text" placeholder="Enter Your Name" className="form-control" /><br />
              <input type="email" placeholder="Enter Your Email" className="form-control" /><br />
              <input type="tel" placeholder="Enter Your Number" className="form-control" /><br />
              <input type="text" placeholder="Enter Your Message" className="form-control" /><br />
              <a href="#!">Send Message</a>
            </div>
          </div>
        </div>
  
        {/* Contact Details */}
        <div className="container">
          <div className="row" id="con_card">
            <div className="col-md-4 offset-md-1 text-center mb-3 mb-md-0">
              <h2>Address</h2>
              <p>
                ABC Block Society, <br />
                Dwarka Sector - 54 <br />
                New Delhi 110020
              </p>
            </div>
            <div className="col-md-4 offset-md-2 text-center">
              <h2 className="mt-3">Contact Details</h2>
              <i className="fa-solid fa-paper-plane"></i> panah.ngo@gmail.com <br />
              <i className="fa-solid fa-phone"></i> +9192939495
            </div>
          </div>
        </div>
  
        {/* Map */}
        <div className="container mt-5 mt-md-0">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14013.583690874464!2d77.0714624!3d28.587897!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x43ef58e17266904f!2sVSIT.in!5e0!3m2!1sen!2sin!4v1648750946094!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
  
        {/* Subscribe */}
        <div className="container mb-3">
          <div className="row py-5">
            <div className="col-12 text-center">
              <img src="assets/love-icon.png" alt="Love Icon" width="20px" />
              <p className="fw-bold">SUBSCRIBE TO OUR NEWSLETTER</p>
              <h1>Sign Up To</h1>
              <h1 id="rec_up">Receive Updates</h1>
              <h1 className="mb-4">On news and Updates</h1>
              <a href="#!" id="sub_now">Subscribe Now</a>
            </div>
          </div>
        </div>
  
        {/* Helping Hand */}
        <section className="container-fluid border" id="helping_hand">
          <div className="row px-md-5 d-flex align-items-center">
            <div className="col-md-6 p-3 ps-md-5 text-center text-md-start">
              <img src="assets/love-icon.png" alt="Love Icon" width="15px" />
              <br />
              <small>HELPING HANDS</small>
              <h1 className="my-3">
                We're Here to Help <br />
                People in Need
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, nihil magnam! Molestias dolorem magnam ad
                placeat! Provident, possimus. Dignissimos, sit?
              </p>
              <div className="text-end d-none d-md-block">
                <img src="assets/arrow.png" alt="Arrow" id="hh_img1" />
              </div>
            </div>
            <div className="col-md-6 text-center" id="hh_img2">
              <img src="assets/img-8.jpg" alt="Helping Hand" />
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <section className="container-fluid text-center text-md-start" id="footer">
          <div className="row py-5">
            <div className="col-md-4 ps-md-5">
              <img src="assets/logo-white.png" alt="Logo White" className="img-fluid ps-md-5" />
              <p className="pt-3 ps-md-5 pe-md-4 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In, odit.
              </p>
            </div>
            <div className="col-md-2 link d-none d-md-block">
              <h4>Pages</h4>
              <a href="#!">Home</a>
              <a href="#!">Facility</a>
              <a href="#!">Animal Care</a>
              <a href="#!">About Us</a>
              <a href="#!">Contact Us</a>
            </div>
            <div className="col-md-2 link d-none d-md-block">
              <h4>Links</h4>
              <a href="#!">Home</a>
              <a href="#!">Facility</a>
              <a href="#!">Animal Care</a>
              <a href="#!">About Us</a>
              <a href="#!">Contact Us</a>
            </div>
            <div className="col-md-4 f_contact">
              <h4>Contact</h4>
              <a href="mailto:panah.ngo@gmail.com">
                <i className="fa-solid fa-paper-plane"></i> panah.ngo@gmail.com
              </a><br />
              <a href="tel:+9192939495">
                <i className="fa-solid fa-phone"></i> +9192939495
              </a><br />
              <a href="#!">
                <i className="fa-solid fa-house"></i> Address
              </a><br />
              <p>
                ABC Block Society,<br />
                Dwarka Sector - 54<br />
                New Delhi 110020
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Contact;
  