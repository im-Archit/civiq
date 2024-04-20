import React from "react";
import { blog } from "../../../dummydata";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Newsletter - Stay tuned and get the latest update</h1>
            <span>Your Way Ahead</span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>Civiq</h1>
            <span>Know Your Nation</span>
            <p>
              Empowering young minds, one law at a time—where curiosity meets
              justice, and every child becomes a legal superhero in their own
              right, with our interactive law courses for kids at RightsQuest
              Academy.
            </p>

            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-instagram icon"></i>
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          
          <div className="box last">
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
              Bharati Vidyapeeth College Of Engineering
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                +9582255678
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
              ayush3435@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>
          Copyright ©2023 All rights reserved | This template is made with{" "}
          <i className="fa fa-heart"></i> by ARCHIT , AYUSH , PURVA , SUHANI/NA 
        </p>
      </div>
    </>
  );
};

export default Footer;
