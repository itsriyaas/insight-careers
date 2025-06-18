import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer className="py-5 bg-light mt-5">
      <div className="container">
        <div className="row">

          {/* About */}
          <div className="col-md-4 mb-4 mb-md-0">
            <img
              src="800 x 800 pixel logo.png"
              alt="Insight Careers Logo"
              width="100px"
              height="180px"
              className="me-3"
            />
            <p className="text-muted mt-2 text-justify">
              Insight Careers connects ambitious professionals with top career
              opportunities across industries. We offer expert resources, job
              listings, and personalized guidance to help you take the next step
              in your career journey.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Find Jobs
                </a>
              </li>
              <li>
                <a href="/careeradvice.html" className="text-muted text-decoration-none">
                  Career advice
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-md-2 mb-4 mb-md-0">
            <h5>Follow Us</h5>
            <a href="#" className="text-muted me-3" aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-muted me-3" aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-muted" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>

          {/* Contact */}
          <div className="col-md-2">
            <h5>Contact Us</h5>
            <p>
              Neelathukattil Building 1st Floor,<br />
              Opp. Town Hall, Irinjalakuda PO 680121
            </p>
            <a href="tel:918921571442" className="text-decoration-none text-muted">
              <p>
                <i className="bi bi-telephone-fill me-2"></i>+91 89215 71442
              </p>
            </a>
            <a href="tel:919744471135" className="text-decoration-none text-muted">
              <p className="ms-4">+91 97444 71135</p>
            </a>
          </div>
        </div>

        <hr className="border-light my-4" />

        <div className="text-center text-muted">
          &copy; 2025 Insight Careers | All rights reserved | Designed By{" "}
          <a target="_blank"
            href="https://theaitsolutions.net/"
            style={{ color: "rgb(77, 77, 184)",textDecoration:"none"}}
          >
            Thea IT Solutions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
