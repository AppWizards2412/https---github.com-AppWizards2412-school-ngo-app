import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import '../App.css';



const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: -100,
      delay: 40,
      duration: 600,
      easing: 'ease-in-out',
      mirror: true,
      once: false,
      anchorPlacement: 'top-center',
    });
  }, []);

  return (
    <div>
      {/* Carousel */}
      <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active container-fluid py-md-5" data-bs-interval="4000">
            <div className="row g-0">
              <img src="assets/carousel-1.png" alt="Description" className="img-fluid w-50" />
              <div className="col-6 d-flex justify-content-center align-items-center anime-2">
                <div className="ps-md-5">
                  <h5>
                    Let's do some work for{' '}
                    <img src="assets/love-icon.png" alt="Love icon" className="m-0" width="10px" />
                  </h5>
                  <h1>All the people of God. We lived enough for ourselves, live a little for the needy.</h1>
                </div>
              </div>
              <div className="col-6 anime-3">
                <img src="assets/carousel-2.png" alt="Description" className="img-fluid w-100" />
              </div>
            </div>
          </div>
          {/* Additional carousel items can be added here */}
        </div>
      </div>

      {/* Welcome Section */}
      <section className="container" data-aos="fade-up">
        <div className="row text-center" id="welcome">
          <div className="col-12">
            <img src="assets/love-icon.png" alt="Love icon" width="30px" />
            <h1>WELCOME TO <span>PANAH</span></h1>
          </div>
          <div className="col-md-8 offset-md-2 my-md-5">
            <p>
              God has obligated Himself only to the extent of our needs.
              <br className="d-none d-md-block" />
              That would include food, clothing, shelter, companionship,
              <br className="d-none d-md-block" />
              love, and salvation through Jesus Christ.
            </p>
            <img src="assets/sketch-1.png" alt="Illustration" width="250px" />
            <center>
              <img src="assets/quote-1.png" alt="Quote" width="50px" className="d-block d-md-none" />
            </center>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="t-cards" className="mt-5">
        <div className="container pb-md-5 mb-md-4 mb-3">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h1>
                What We Do <img src="assets/love-icon.png" alt="" width="15px" />
              </h1>
            </div>
            <div
              className="col-sm-6 col-md-3"
              data-aos="zoom-in"
              data-aos-delay="10"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-anchor-placement="center-bottom"
            >
              <div className="panel panel-default panel-card">
                <div className="panel-heading">
                  <img src="assets/img-1.jpg" alt="" />
                </div>
                <div className="panel-figure">
                  <i className="fa-solid fa-book-open fa-bounce"></i>
                </div>
                <div className="panel-body text-center">
                  <h4 className="panel-header">Education</h4>
                  <p className="m-0">
                    <small>Education for children</small>
                  </p>
                </div>
                <div className="panel-thumbnails">
                  <div className="row">
                    <div className="col-12 text-center">
                      <p className="m-0">
                        Lorem ipsum dolor sit, ame elit. Saepe, nam.
                      </p>
                      <a href="#!">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* More panels... */}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <div className="container mb-3 mb-md-5">
        <div className="row text-center" id="vision">
          <div className="col-12 text-center">
            <h1>
              <img src="assets/love-icon.png" alt="" className="m-0" width="15px" />
              <br />
              Causes and positive change <br className="d-none d-md-block" />
              all over the world.
              <br />
              <img src="assets/sketch-2.png" alt="" width="250px" />
            </h1>
          </div>
          <div className="col-md-4">
            <section>
              <img src="assets/mission.png" alt="" className="img-fluid" width="60px" />
            </section>
            <h4>Our Mission</h4>
            <p className="m-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              atque libero eaque sit debitis perspiciatis eius quam amet earum?
            </p>
          </div>
          {/* Additional sections for 'Our Vision' and 'Our Values' */}
        </div>
      </div>

      {/* Achieve Section */}
      <section className="container-fluid mb-5" id="achieve">
        <div className="row py-md-5 py-5">
          <div className="col-12 text-center">
            <img src="assets/we-use-icon.png" alt="" width="60px" />
            <h1>
              This is the impact you helped <br className="d-none d-md-block" />
              us achieve in 2020-21
            </h1>
          </div>
          <div className="row text-center count_div">
            <section className="col-sm-6 col-md-3">
              <p className="pt-2"><span id="number1">0</span>+</p>
              <h5>
                Gave Education To The <br />
                Uneducated Children
              </h5>
              </section>
              <section className="col-sm-6 col-md-3">
                <p className="pt-2"><span id="number2">0</span>+</p>
                <h5>
                  Gave Food To The <br />
                  Needed People
                </h5>
              </section>
              <section className="col-sm-6 col-md-3">
                <p className="pt-2"><span id="number3">0</span>+</p>
                <h5>
                  Gave Shelter To The <br />
                  Needed People
                </h5>
              </section>
              <section className="col-sm-6 col-md-3">
                <p className="pt-2"><span id="number4">0</span>+</p>
                <h5>
                  Provided Shelter And <br />
                  Adoption For Animals
                </h5>
              </section>
            </div>
          </div>
        </section>
  
        {/* Upcoming Events Section */}
        <div className="container mb-5">
          <div className="row my-3">
            <div className="col text-center">
              <img src="assets/love-icon.png" alt="" width="20px" />
              <p className="m-0">READY TO HELP THEM</p>
              <h1>Upcoming Events</h1>
            </div>
          </div>
          <div className="row text-center" id="event">
            <div
              className="col-md-6 col-lg-4"
              data-aos="flip-left"
              data-aos-delay="10"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-anchor-placement="top-center"
            >
              <div className="card">
                <span> 25 Mar </span>
                <img src="assets/img-5.jpg" className="card-img-top" alt="..." />
                <div className="card-body text-center">
                  <h5>Provide Free Tuition Session</h5>
                  <p className="text-muted">
                    <small>Some quick example text to build <br className="d-none d-md-block" /> on the card title</small>
                  </p>
                  <a href="#!">Read More</a>
                </div>
              </div>
            </div>
            {/* More card elements... */}
          </div>
        </div>
  
        {/* Team & Testimonials Section */}
        <section className="container-fluid mb-5">
          <div className="row py-md-5" id="team">
            <section className="col-md-6 text-center mb-3 mb-md-0">
              <h1 className="m-4 pb-md-5">Meet Our Team</h1>
              <div className="d-md-flex pt-4 pt-md-3">
                <div className="d-flex justify-content-center align-items-center">
                  <h5>
                    Sapna Sharma <br />
                    <span>Feature Page Developer</span>
                  </h5>
                  <img src="assets/testimonial (2).jpeg" alt="" />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="assets/testimonial (2).jpeg" alt="" />
                  <h5>
                    Sarin Suseel <br />
                    <span>About Page Developer</span>
                  </h5>
                </div>
              </div>
  
              <div className="">
                <img src="assets/testimonial (2).jpeg" alt="" />
                <h5>
                  Vinay Singh <br />
                  <span>Home Page Developer</span>
                </h5>
              </div>
  
              <div className="d-md-flex pt-3">
                <div className="d-flex justify-content-center align-items-center">
                  <h5>
                    Nitin Kumar <br />
                    <span> Animal Care Page Developer </span>
                  </h5>
                  <img src="assets/testimonial (2).jpeg" alt="" />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="assets/testimonial (2).jpeg" alt="" />
                  <h5>
                    Mirtunjay Kumar<br />
                    <span>Contact Page Developer</span>
                  </h5>
                </div>
              </div>
            </section>
            <div className="col-md-6 text-center px-md-5 mb-5 mb-md-0">
              <h1 className="m-4 pb-md-5">What People Says</h1>
              <div id="review_carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner mt-md-5 mt-3">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-12">
                        <div className="testimonial-wrapper">
                          <div>
                            <img src="assets/quote-1.png" alt="" />
                            <br />
                            <p className="m-2 m-md-4">
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam magniLorem ipsum dolor sit, amet
                              consectetur adipisicing elit. Laboriosam magni
                            </p>
                            <h5>
                              Vinay Singh
                              <img src="assets/love-icon.png" alt="" width="15px" />
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* More carousel items for testimonials... */}
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Helping Hand Section */}
        <section className="container-fluid border" id="helping_hand">
          <div className="row px-md-5 d-flex align-items-center">
            <div className="col-md-6 p-3 ps-md-5 text-center text-md-start">
              <img src="assets/love-icon.png" alt="" width="15px" />
              <br />
              <small>HELPING HANDS</small>
              <h1 className="my-3">
                We're Here to Help <br />
                People in Need
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, nihil magnam! Molestias dolorem magnam ad placeat!
                Provident, possimus. Dignissimos, sit?
              </p>
              <div className="text-end d-none d-md-block">
                <img src="assets/arrow.png" alt="" id="hh_img1" />
              </div>
            </div>
            <div className="col-md-6 text-center" id="hh_img2">
              <img src="assets/img-8.jpg" alt="" />
            </div>
          </div>
        </section>
  
        {/* Become Helper Section */}
        <section className="container pb-4" id="help">
          <div className="row" id="volunteer">
            <div className="col-12 text-center">
              <img src="assets/sketch-3.png" alt="" width="250px" />
              <h1>
                Help People Change Lives <br className="d-none d-md-block" />
                Locally and Around <br className="d-none d-md-block" />
                The World
              </h1>
            </div>
            <div className="my-3 my-md-5 text-center">
              <a href="#!">Become a Volunteer</a>
            </div>
          </div>
        </section>
  
        {/* Footer Section */}
        <section className="container-fluid text-center text-md-start" id="footer">
          <div className="row py-5">
            <div className="col-md-4 ps-md-5">
              <img src="assets/logo-white.png" alt="" className="img-fluid ps-md-5" />
              <p className="pt-3 ps-md-5 pe-md-4 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In, odit. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. In, odit. amet consectetur.
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
                <i className="fa-solid fa-paper-plane"></i>
                panah.ngo@gmail.com
              </a>
              <a href="tel:+9192939495">
                <i className="fa-solid fa-phone"></i> +9192939495
              </a>
              <a href="#!">
                <i className="fa-solid fa-house"></i> Address
              </a>
              <p>
                ABC Block Society, <br />
                Dwarka Sector - 54 <br />
                New Delhi 110020
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  export default Home;