import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">About <span style={{color:"#0E7ABF"}}>Insight Careers</span></h2>

        <div className="row align-items-center">
          <div className="col-lg-3 mb-4 mb-lg-0">
            <img
              src="800 x 800 pixel logo.png"
              alt="Insight Careers"
              className="img-fluid rounded" style={{width:"100px"}}
            />
          </div>

          <div className="col-lg-6">
            <p className="lead text-center">
              <strong>Insight Careers</strong> is a trusted career service center dedicated to empowering job seekers, students,
              and professionals in shaping successful career paths. Whether you're a fresh graduate looking for your first job or a seasoned expert aiming for a career change, we're here to support you every step of the way.
            </p>

            <p className="text-center">
              We specialize in <strong>career guidance, job listings, resume support, interview preparation,</strong> and personalized consulting services.
              Our mission is to connect talent with opportunity and to inspire confidence in every individual’s professional journey.
            </p>

            <p className="text-center">
              With a growing network of employers, trainers, and mentors, Insight Careers bridges the gap between ambition and achievement.
              Let us help you turn your career aspirations into reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
