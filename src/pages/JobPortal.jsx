import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const jobs = [
  {
    title: "Frontend Developer",
    description:
      "Work with React and Bootstrap to build user-friendly interfaces.",
    location: "Remote",
    responsibilities: ["Develop UI components", "Ensure responsiveness"],
    requirements: ["Proficiency in React", "Experience with Bootstrap"],
    category: "engineering",
    keywords: "frontend developer react bootstrap",
    jobid: "job2",
    link: "https://example.com/jobs/backend-developer",
  },
  {
    title: "Backend Developer",
    description: "Build scalable APIs using Node.js and PostgreSQL.",
    location: "New York, NY",
    responsibilities: ["Build APIs", "Manage databases"],
    requirements: ["Experience with Node.js", "Knowledge of PostgreSQL"],
    category: "engineering",
    keywords: "backend developer nodejs postgresql api",
    jobid: "job3",
    link: "https://example.com/jobs/backend-developer",
  },
  {
    title: "Graphics Designer",
    description: "graphics designer with a focus on ui/ux",
    location: "Thrissur,Kerala",
    responsibilities: ["Design", "Manage Logos branding"],
    requirements: ["Experience with Photoshop", "Knowledge of Premier pro"],
    category: "design",
    keywords: "designer graphics photoshop adobe premierpro",
    jobid: "job4",
    link: "https://example.com/jobs/backend-developer",
  },
  // Add more jobs as needed
];

const JobCard = ({ job, onClick }) => (
  <div className="col-md-6 job-card">
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{job.title}</h5>
        <p className="card-text">{job.description}</p>
        <p className="text-muted">
          <i className="bi bi-geo-alt"></i> {job.location}
        </p>
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => onClick(job)}
        >
          View Details
        </button>
      </div>
    </div>
  </div>
);

function JobPortal() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [selectedJob, setSelectedJob] = useState(null);

  const filteredJobs = jobs.filter((job) => {
    const matchCategory = category === "all" || job.category === category;
    const matchSearch = job.keywords
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
      <div className="container mt-4">
        <h3>
          Find your dream <br /> <span style={{ color: "green" }}>Job Now</span>
        </h3>
        {/* Carousal */}
        <div className="container-fluid d-flex justify-content-center mt-5 mb-4">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
            style={{ width: "800px" }}
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/src/assets/banner1.jpg"
                  className="d-block w-100 rounded"
                  alt="Slide 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/src/assets/banner2.jpg"
                  className="d-block w-100 rounded"
                  alt="Slide 2"
                />
              </div>
              {/* Add more carousel items here if needed */}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* Filter Controls */}
        <div className="row mb-4">
          <div className="col-md-6 mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Search jobs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="engineering">Engineering</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
        </div>

        {/* Job Cards */}
        <div className="row g-3">
          {filteredJobs.map((job, index) => (
            <JobCard key={index} job={job} onClick={setSelectedJob} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedJob && (
        <div className="modal show fade d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedJob.title}</h5>
                <button
                  className="btn-close"
                  onClick={() => setSelectedJob(null)}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  <strong>Location:</strong> {selectedJob.location}
                </p>
                <p>
                  <strong>Description:</strong> {selectedJob.description}
                </p>
                <p>
                  <strong>Responsibilities:</strong>
                  <ul>
                    {selectedJob.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </p>
                <p>
                  <strong>Requirements:</strong>
                  <ul>
                    {selectedJob.requirements.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedJob(null)}
                >
                  Close
                </button>
                <a
                  href={`https://wa.me/919778544974?text=${encodeURIComponent(
                    `I would like to apply for this position. Please let me know the next steps or if any further information is required.\n\nJob Title: ${selectedJob.title}\nJob ID: ${selectedJob.jobid}`
                  )}`}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default JobPortal;
