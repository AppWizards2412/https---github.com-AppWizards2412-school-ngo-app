import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import 'animate.css/animate.min.css'; // Import Animation CSS
import './about-style.css'; // Custom styles
import './about-print.css'; // Print styles
import Swiper, { Navigation, Pagination, Parallax } from 'swiper';


// Initialize Swiper and custom carousels
const About = () => {
  useEffect(() => {
    // Initialize Swiper
    new Swiper('.mySwiper', {
      speed: 600,
      parallax: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);
  return (
    <div>
      {/* Swiper Component and Custom Carousel should be included here */}

      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          {/* Additional Swiper slides go here */}
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </div>

      <div className="carousel">
        <div className="item">Item 1</div>
        {/* Additional carousel items */}
        <div className="next1">Next</div>
        <div className="prev1">Prev</div>
      </div>
    </div>
  );
  return (
    
    <div>
      {/* Swiper Section */}
      <div style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }} className="swiper mySwiper">
        <div className="parallax-bg" style={{
          backgroundImage: "url(img/01.jpg)"
        }}         data-swiper-parallax="-23%"></div>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="title" data-swiper-parallax="-300">
              <h1>About Us</h1>
            </div>
            <div className="subtitle" data-swiper-parallax="-200"></div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                <i>
                  A shelter home is a place to take refuge or a temporary
                  arrangement if you are in urgent need or emergency.
                </i>
              </p>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="title" data-swiper-parallax="-300">
              <h1>We Create Bond</h1>
            </div>
            <div className="subtitle" data-swiper-parallax="-200"></div>
            <div className="text" data-swiper-parallax="-200">
              <img src="img/09.jpg" alt="" width="100%" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="title" data-swiper-parallax="-300">
              <h1>We are a Family</h1>
            </div>
            <div className="subtitle" data-swiper-parallax="-200"></div>
            <div className="text" data-swiper-parallax="-700">
              <p>
                A shelter can protect you from the sun, insects, wind, rain,
                snow, hot or cold temperatures, and enemy observation. It can
                give you a feeling of well-being. It can help you maintain your
                will to survive.
              </p>
            </div>
          </div>
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </div>

      {/* About Us Details */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <img src="img/04.jpg" alt="" width="100%" height="300px" className="bx2" />
          </div>
          <div className="col-lg-6 mt-4">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 id="sc1">Panaha</h1>
                </div>
                <div className="col-12">
                  <p>
                    Panaha seeks to support the creation of a society where
                    women in distress, particularly those subjected to abuse and
                    domestic violence, regain their identity and self-respect
                    and develop an understanding to exercise their basic human
                    rights. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Eius ducimus quidem earum, iste itaque placeat
                    molestias libero praesentium maxime nisi totam delectus.
                    Sapiente quaerat cum eligendi ipsa, inventore eaque enim!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 id="sc1">Our Vision</h1>
                </div>
                <div className="col-12">
                  <p>
                    Panaha seeks to support the creation of a society where
                    women in distress, particularly those subjected to abuse and
                    domestic violence, regain their identity and self-respect
                    and develop an understanding to exercise their basic human
                    rights. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Eius ducimus quidem earum, iste itaque placeat
                    molestias libero praesentium maxime nisi totam delectus.
                    Sapiente quaerat cum eligendi ipsa, inventore eaque enim!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 fa">
            <i className="fa-solid fa-link fa1"></i>
            <img src="img/20.jpg" alt="" width="100%" height="300px" className="bx2" />
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="container-fluid">
        <div className="row pt-5">
            <div className="col text-center bx3">
              <h1>Memories</h1>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 bx1">
                  <img src="img/11.jpg" className="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water" />
                  <img src="img/23.jpg" className="w-100 shadow-1-strong rounded mb-4" alt="Wintry Mountain Landscape" />
                </div>
  
                <div className="col-lg-4 mb-4 mb-lg-0">
                  <img src="img/12.jpg" className="w-100 shadow-1-strong rounded mb-4" alt="Mountains in the Clouds" />
                  <img src="img/22.jpg" className="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water" />
                </div>
  
                <div className="col-lg-4 mb-4 mb-lg-0 bx1">
                  <img src="img/13.jpg" className="w-100 shadow-1-strong rounded mb-4" alt="Waves at Sea" />
                  <img src="img/17.jpg" className="w-100 shadow-1-strong rounded mb-4" alt="Yosemite National Park" />
                  <img src="img/05.jpg" className="w-100 shadow-1-strong rounded mb-4" alt="Yosemite National Park" />
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Our Journey */}
        <div className="container-fluid">
          <div className="row pt-5">
            <div className="col text-center bx3">
              <h1>Our Journey</h1>
              <p>100 years of social work and going on until there is a person who wants our support</p>
            </div>
          </div>
        </div>
  
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-12">
              <div className="owl-carousel owl-theme">
                <div className="item"><h4><img src="img/13.jpg" className="img-responsive" alt="logo1" height="200px" /></h4></div>
                <div className="item"><h4><img src="img/14.jpg" className="img-responsive" alt="logo1" height="200px" /></h4></div>
                <div className="item"><h4><img src="img/15.jpg" className="img-responsive" alt="logo1" height="200px" /></h4></div>
                <div className="item"><h4><img src="img/16.jpg" className="img-responsive" alt="logo1" height="200px" /></h4></div>
                <div className="item"><h4><img src="img/17.jpg" className="img-responsive" alt="logo1" height="200px" /></h4></div>
                <div className="item"><h4><img src="img/18.jpg" className="img-responsive" alt="logo1" height="200px" /></h4></div>
                <div className="item"><h4><img src="img/19.jpg" className="img-responsive" alt="logo1" height="200px" /></h4></div>
                <div className="item"><h4><img src="img/20.jpg" className="img-responsive" alt="logo1" height="200px" /></h4></div>
                <div className="item"><h4><img src="img/21.webp" className="img-responsive" alt="logo1" height="200px" /></h4></div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Social Welfare */}
        <div className="container-fluid">
          <div className="row pt-5">
            <div className="col text-center bx3">
              <h1>Social Welfare</h1>
              <p>We do our best to make this world a better place</p>
            </div>
          </div>
        </div>
        <div className="container mt-5">
            <div className="row">
              <div className="col-lg-6">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <h5>News Caught Us</h5>
                    </div>
                    <div className="col-12">
                      <iframe 
                        width="100%" 
                        height="315" 
                        src="https://www.youtube.com/embed/TJqNYV-GykI" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                      </iframe>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="col-lg-6 col-sm-12 mt-5 text-center d-none d-md-block">
                <div className="container bb1">
                  <div className="carousel bb2">
                    <div className="item7 a"><img src="img/24.jpg" alt="" width="100%" height="100%" /></div>
                    <div className="item7 b"><img src="img/25.jpg" alt="" width="100%" height="100%" /></div>
                    <div className="item7 c"><img src="img/26.jpg" alt="" width="100%" height="100%" /></div>
                    <div className="item7 d"><img src="img/27.jpg" alt="" width="100%" height="100%" /></div>
                    <div className="item7 e"><img src="img/28.jpeg" alt="" width="100%" height="100%" /></div>
                    <div className="item7 f"><img src="img/05.jpg" alt="" width="100%" height="100%" /></div>
                  </div>
                  <div className="next1">Next</div>
                  <div className="prev1">Prev</div>
                </div>
              </div>
            </div>
          </div>
    
          {/* Accordion Section */}
          <div className="container-fluid">
            <div className="row pt-5">
              <div className="col text-center bx3">
                <h1>We Create Smiles</h1>
                <p>Social welfare is not an activity. It's selfless help that makes others' lives better.</p>
              </div>
            </div>
          </div>
    
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-4 col-sm-12">
                <div className="container accordion1">
                  <div className="row">
                    <div className="col-12 mt-5 text-center">
                      <h1>Panah</h1>
                    </div>
                    <div className="col-12 text-center">
                      <h3>What we do is not what you think</h3>
                    </div>
                    <div className="col-12 text-center">
                      <p>
                        We create bonds with people who have nothing left and are left to die without a word. Not to
                        mention your statistical brocode. What we do is not what we say, but what we achieve.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="col-lg-8 col-sm-12 mt-3 mt-md-0">
                <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true">
                        What we do?
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                      <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default until the
                        collapse plugin adds the appropriate classes that we use to style each element. These classes
                        control the overall appearance.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="                    #panelsStayOpen-collapseTwo" aria-expanded="false">
                        Where to start is not in you right?
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                      <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false">
                        What is Panah doing in this world?
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                      <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          {/* Footer */}
          <section className="container-fluid text-center text-md-start mt-5" id="footer">
            <div className="row py-5">
              <div className="col-md-4 ps-md-5">
                <img src="img/logo-white.png" alt="Logo White" className="img-fluid ps-md-5" />
                <p className="pt-3 ps-md-5 pe-md-4 text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In, odit.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In, odit.
                  amet consectetur.
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
    
    export default About;
    
    
  
