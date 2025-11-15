import React, { useEffect } from "react";
import "./Careers.css";
import heroImage from "../assets/career.png";
import starImage from "../assets/star.png";

export default function Careers() {
  useEffect(() => {
    document.title = "Careers - UBC | United Brothers Company";
  }, []);

  const jobs = [
    {
      title: "Community Manager",
      date: "10th Mar 2025",
      blurb:
        "We’re looking for a warm, people-first individual to lead member engagement, curate events, and cultivate a welcoming coworking culture."
    },
    {
      title: "Space Operations Coordinator",
      date: "10th Mar 2025",
      blurb:
        "Support the day-to-day operations of our space—keeping things running smoothly, maintaining high standards, and ensuring an excellent member experience."
    },
    {
      title: "Membership Experience Associate",
      date: "10th Mar 2025",
      blurb:
        "Be the first point of contact for our members—whether onboarding new joiners or handling queries, you’ll help everyone feel right at home."
    },
    {
      title: "Events & Partnerships Executive",
      date: "10th Mar 2025",
      blurb:
        "Plan and deliver events that bring our community together, while building relationships with local partners to enrich our member offerings."
    }
  ];

  return (
    <main className="careers">
      <section
        className="careers-hero"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${heroImage})`
        }}
        aria-label="Careers hero"
      >
        <div className="site-container">
          <span className="pill pill-outline">★ Opportunity</span>
          <h1 className="hero-title">
            Life at
            <br />
            United Brothers
          </h1>
          <p className="hero-sub">
            At the United Brothers Company, we are more than just a team; we are a family of
            innovators, creators, and professionals.
          </p>
        </div>
      </section>

      <section className="why">
        <div className="site-container">
          <span className="pill pill-soft">★ Why</span>
          <h2 className="section-title">Why Join Us?</h2>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">
                <img src={starImage} alt="Star icon" />
              </div>
              <h3 className="why-head">Nurture Your<br />Potential</h3>
              <p className="why-text">
                We invest in our people through continuous learning and development opportunities,
                empowering you to grow both professionally and personally.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">
                <img src={starImage} alt="Star icon" />
              </div>
              <h3 className="why-head">A Culture<br />of Integrity</h3>
              <p className="why-text">
                Our core values of purity, quality, and trust are reflected in every aspect of our
                work, from our products to our people.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">
                <img src={starImage} alt="Star icon" />
              </div>
              <h3 className="why-head">Make an<br />Impact</h3>
              <p className="why-text">
                Be a part of a company that is shaping the future of the FMCG industry and making a
                positive difference in households worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="openings" aria-label="Current openings">
        <div className="site-container">
          <span className="pill pill-outline inverted">★ Join Us</span>
          <h2 className="section-title inverted">Our Openings</h2>

          <ul className="job-list">
            {jobs.map((job) => (
              <li key={job.title} className="job-row">
                <div className="job-left">
                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-date">
                    <span>Posted Date</span> / {job.date}
                  </p>
                </div>

                <div className="job-right">
                  <p className="job-blurb">{job.blurb}</p>
                  <button className="btn-apply" type="button" aria-label={`Apply for ${job.title}`}>
                    Apply Now
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
