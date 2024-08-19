import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import './animal-care.css'; // Import the animal-care specific CSS
import './home-print.css'; // Import the print CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const AnimalCare = () => {
  return (
    <div>
      {/* Menu Section */}
      <div>
        <p id="menu_img"></p>
        <p id="text_01">
          Don't treat animals as animals. Treat them as living Beings. that's what they are.
        </p>
      </div>

      {/* Our Services Section */}
      <h6>Our Services</h6>
      <section className="sect_02">
        <div>
          <p className="sect02_font"><i className="fa-solid fa-tent"></i></p>
          <p className="sect_sub01">Shelter</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
        </div>
        {/* Repeat for other sections... */}
        <div>
          <p className="sect02_font"><i className="fa-solid fa-bowl-food"></i></p>
          <p className="sect_sub01">Proper Diet</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
        </div>
        {/* Add more service sections */}
      </section>

      {/* Adoption Section */}
      <h2 style={{ textAlign: "center" }} id="adopt_h2">Adopt Don't Shop</h2>
      <section id="Adop_t">
        <div>
          <p><img src="/src/assets/ani-img/adopt.jpg" alt="Adopt" width="600px" /></p>
        </div>
        <div id="adopt_sub01">
          <form>
            <input type="text" name="fname" placeholder="First Name" required />
            <input type="text" name="lname" placeholder="Last Name" required /><br />
            <input type="email" name="email" placeholder="Email" required />
            <input type="number" name="number" placeholder="Mobile Number" required /><br />
            <textarea name="message" cols="44" rows="6" style={{ marginTop: "20px", marginLeft: "20px" }}></textarea><br />
            <input type="submit" value="Send Me" />
          </form>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volun_teer">
        <div></div>
      </section>
      <section id="volunteer_text">
        <div>
          <p id="volunteer_text01">Love heals</p>
          <p id="volunteer_text02">
            You will be encouraged to spend lots of time cuddling and socializing
            with our sanctuary dogs, particularly those with disabilities who
            thrive on special attention and one-on-one time with volunteers. Dogs
            recovering from accidents with spinal trauma need physical therapy and
            lots of love to keep their spirits up while they heal. Other help will
            include bottle feeding milk to orphaned calves, brushing donkeys,
            assisting in physical therapy, hydrotherapy, bathing the buffaloes,
            bathing and brushing dogs, among many other things!
          </p>
          <p><button>Become A Volunteer</button></p>
        </div>
      </section>

      {/* Rescue Section */}
      <section id="res_ue">
        <div>
          <p><img src="ani-img/resue_01.jpeg" alt="Rescue 1" width="248px" /></p>
          <p className="rescue_text01">March 05, 2022</p>
          <p className="rescue_text02">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptate.
          </p>
          <p><a href="#!">Read More</a></p>
        </div>
        {/* Repeat for other rescue items... */}
        <div>
          <p><img src="ani-img/rescue_02.jpeg" alt="Rescue 2" width="248px" /></p>
          <p className="rescue_text01">March 05, 2022</p>
          <p className="rescue_text02">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptate.
          </p>
          <p><a href="#!">Read More</a></p>
        </div>
        <div>
          <p><img src="ani-img/rescue_03.jpeg" alt="Rescue 3" width="248px" /></p>
          <p className="rescue_text01">March 05, 2022</p>
          <p className="rescue_text02">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptate.
          </p>
          <p><a href="#!">Read More</a></p>
        </div>
        <div>
          <p><img src="ani-img/rescue_04.jpeg" alt="Rescue 4" width="248px" /></p>
          <p className="rescue_text01">March 05, 2022</p>
          <p className="rescue_text02">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptate.
          </p>
          <p><a href="#!">Read More</a></p>
        </div>
      </section>

      {/* Our Story Video Section */}
      <h2 id="video_text">Our Story</h2>
      <section className="video">
        <div>
          <iframe
            width="400"
            height="240"
            src="https://www.youtube.com/embed/03XDQjg84Lw"
            title="YouTube video player 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="400"
            height="240"
            src="https://www.youtube.com/embed/6wwX7nIOH5I"
            title="YouTube video player 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="400"
            height="240"
            src="https://www.youtube.com/embed/43QuVrRcaEE"
            title="YouTube video player 3"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Number Speaks Section */}
      <section id="number">
        <div><img src="ani-img/bgi_01.jpg" alt="Background" /></div>
      </section>
      {/* Number Speaks Section */}
      <section id="number_text">
        <div>
          <p className="number_text02">15000</p>
          <p className="number_text03">Animals Rescued</p>
        </div>
        <div>
          <p className="number_text02">15000</p>
          <p className="number_text03">Animals at Panah</p>
        </div>
        <div>
          <p className="number_text02">15000</p>
          <p className="number_text03">Volunteers</p>
        </div>
        <div>
          <p className="number_text02">15000</p>
          <p className="number_text03">Animals Adopted</p>
        </div>
      </section>

      {/* Footer */}
      <section className="container-fluid text-center text-md-start" id="footer">
        <div className="row py-5">
          <div className="col-md-4 ps-md-5">
            <img src="assets/logo-white.png" alt="Logo White" className="img-fluid ps-md-5" />
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

export default AnimalCare;


