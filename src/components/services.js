import React from 'react';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import { FaHome, FaBook, FaHospital, FaDog, FaChild, FaHeart, FaBars } from 'react-icons/fa';
import './services-style.css';
import './home-print.css';

const Services = () => {
  return (
    <div>
      {/* Top Section */}
      <section id="top">
        <div className="container-fluid">
          <div className="col-md-7 heading text-center">
            <h1>WE CREATE HAPPINESS</h1>
            <p>“No one is useless in this world who lightens the burdens of another.”</p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="why-us" id="why">
        <h1>Our Services</h1>
        <div className="container mt-5">
          <div className="row align-items-center">
            <div className="col-md-4">
              <img src="img/smile2.webp" width="430px" height="400px" alt="Smile Image" />
            </div>
            <div className="col-md-8 text-left">
              <ul className="list">
                <li><FaHome /><mark> Providing shelter to everyone.</mark></li>
                <li><FaBook /><mark>Education for children as well as whoever wants to.</mark></li>
                <li><FaHospital /><mark> Health camp every week.</mark></li>
                <li><FaDog /><mark> Shelter for animals</mark></li>
                <li><FaChild /><mark> Adoption for children.</mark></li>
                <li><FaHeart /><mark> Adoption for Animals</mark></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="t-cards" className="mt-5">
        <div className="container text-center mt-5">
          <div className="row">
            <h1>What We Do</h1>
            <div className="col-md-5 cols">
            <img src="img/img-1.jpg" alt="Education" className="img-fluid" width="300px" height="250px" />
            </div>
            <div className="col-md-7 cols2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deleniti repellat laudantium hic qui
                velit, possimus, nemo accusamus commodi perferendis cum animi! Maiores aliquam quasi nihil vel totam
                architecto odit.
              </p>
              <strong>- EDUCATION</strong>
            </div>

            <div className="col-md-7 cols2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deleniti repellat laudantium hic qui
                velit, possimus, nemo accusamus commodi perferendis cum animi! Maiores aliquam quasi nihil vel totam
                architecto odit.
              </p>
              <strong>- HEALTH</strong>
            </div>
            <div className="col-md-5 cols">
              <img src="img/health.jpg" alt="Health" className="img-fluid" width="300px" height="250px" />
            </div>

            <div className="col-md-5 cols">
              <img src="img/img-3.jpg" alt="Shelter" className="img-fluid" width="300px" height="250px" />
            </div>
            <div className="col-md-7 cols2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deleniti repellat laudantium hic qui
                velit, possimus, nemo accusamus commodi perferendis cum animi! Maiores aliquam quasi nihil vel totam
                architecto odit.
              </p>
              <strong>- SHELTER</strong>
            </div>

            <div className="col-md-7 cols2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deleniti repellat laudantium hic qui
                velit, possimus, nemo accusamus commodi perferendis cum animi! Maiores aliquam quasi nihil vel totam
                architecto odit.
              </p>
              <strong>- ADOPTION</strong>
            </div>
            <div className="col-md-5 cols">
              <img src="img/img-4.jpg" alt="Adoption" className="img-fluid" width="300px" height="250px" />
            </div>
          </div>
        </div>
      </section>

      {/* Helping Hand Section */}
      <section id="work">
        <div className="container-fluid mt-5">
          <div className="row text-center">
            <h1>OUR HELPING HAND</h1>
            <div className="col-md-8 para">
              <p>
                Hospitality is always an act that benefits the host even more than the guest. The concept of hospitality
                arose in ancient times when the reciprocity was easier to see: in nomadic cultures, the food and shelter one 
                gave to a stranger yesterday is the food and shelter one hopes to receive from a stranger tomorrow. By offering
                hospitality, one participates in the endless reweaving of a social fabric on which all can depend—thus the gift 
                of sustenance for the guest becomes a gift of hope for the host.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

