import React from 'react';

const ClubPageExample = () => {
  return (
    <div>
      <style>{`
        /* Reset and basic styling */
        * {
          box-sizing: border-box;
        }
        body, html, #root {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background-color: #ffffff;
        }

        /* Hero Section */
        .hero {
          background-color: #ffffff;
          color: #000;
          padding: 100px 20px;
          text-align: center;
        }
        .hero h1 {
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }
        .hero p {
          font-size: 1.25rem;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.5;
        }

        /* Info Section */
        .info-section {
          background: radial-gradient(circle, #022190, #4a227a);
          color: #fff;
          padding: 60px 20px;
          text-align: center;
        }
        .info-section h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .info-section .info-content {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          gap: 20px;
        }
        .info-card {
          flex: 1 1 300px;
          min-width: 280px;
          max-width: 350px;
          text-align: left;
          margin: 0 auto;
        }
        .info-card h3 {
          margin-bottom: 0.5rem;
          font-size: 1.25rem;
          color: #fff;
        }
        .info-card p {
          line-height: 1.5;
          margin-bottom: 1rem;
          color: #fff;
        }
        .info-card a {
          color: #fff;
          text-decoration: none;
          font-weight: bold;
        }

        /* Mission Section */
        .mission-section {
          background-color: #ffffff;
          color: #000;
          padding: 60px 20px;
          text-align: center;
        }
        .mission-section h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .pillars {
          max-width: 800px;
          margin: 0 auto;
          text-align: left;
          line-height: 1.6;
        }
        .pillar {
          margin-bottom: 1.5rem;
        }
        .pillar h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: #022190;
        }

        /* Board Members Section */
        .board-section {
          background: radial-gradient(circle, #022190, #4a227a);
          color: #fff;
          padding: 60px 20px;
          text-align: center;
        }
        .board-section h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .board-members {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin-top: 30px;
        }
        .board-member {
          flex: 1 1 200px;
          max-width: 200px;
        }
        .board-member img {
          width: 100%;
          height: auto;
          border-radius: 50%;
          object-fit: cover;
        }
        .board-member h4 {
          margin: 10px 0 5px 0;
          font-size: 1.1rem;
          color: #fff;
        }
        .board-member p {
          font-size: 0.9rem;
          color: #eee;
        }
      `}</style>

      {/* 1) Hero Section */}
      <section className="hero">
        <h1>Who We Are</h1>
        <p>
          We’re a student-run club dedicated to creating opportunities for marginalized
          students in tech. Our weekly meetings are open to everyone, because we believe
          that inclusivity fosters growth for all.
        </p>
      </section>

      {/* 2) Info Section */}
      <section className="info-section">
        <h2>What We Do</h2>
        <div className="info-content">
          <div className="info-card">
            <h3>Tech Talks & Internships</h3>
            <p>
              We invite industry speakers to share their experiences, discuss
              emerging trends, and provide advice on resumes and portfolios. These
              events often lead to internship and networking opportunities for
              our members.
            </p>
            <a href="#">Learn more &rarr;</a>
          </div>
          <div className="info-card">
            <h3>Conference Sponsorships</h3>
            <p>
              We sponsor members to attend leading tech conferences—such as Grace
              Hopper and AfroTech—where they can learn from experts, build their
              networks, and broaden their professional horizons.
            </p>
            <a href="#">View upcoming conferences &rarr;</a>
          </div>
          <div className="info-card">
            <h3>Inclusive Meetings</h3>
            <p>
              Our meetings are open to all, regardless of major or skill level.
              Each week, we host a variety of sessions, from hands-on workshops
              to casual networking events, ensuring there’s something for everyone.
            </p>
            <a href="#">Join us &rarr;</a>
          </div>
        </div>
      </section>

      {/* 3) Mission Section */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <div className="pillars">
          <p>
            We believe in building a supportive environment where anyone—regardless
            of background or experience—can develop and thrive in the tech world.
            Our mission is guided by three core pillars:
          </p>
          <div className="pillar">
            <h3>Confidence</h3>
            <p>
              Empowering students to believe in their abilities, take risks,
              and pursue leadership opportunities in tech.
            </p>
          </div>
          <div className="pillar">
            <h3>Competence</h3>
            <p>
              Equipping students with essential tech skills, resources, and
              industry insights, so they can excel in their fields of interest.
            </p>
          </div>
          <div className="pillar">
            <h3>Community</h3>
            <p>
              Fostering a welcoming environment where members learn from one
              another, collaborate on projects, and build lasting connections.
            </p>
          </div>
        </div>
      </section>

      {/* 4) Board Members Section */}
      <section className="board-section">
        <h2>Board Members</h2>
        <div className="board-members">
          <div className="board-member">
            <img
              src="https://via.placeholder.com/200"
              alt="Board Member Photo"
            />
            <h4>Member Name</h4>
            <p>Position/Title</p>
          </div>
          <div className="board-member">
            <img
              src="https://via.placeholder.com/200"
              alt="Board Member Photo"
            />
            <h4>Member Name</h4>
            <p>Position/Title</p>
          </div>
          <div className="board-member">
            <img
              src="https://via.placeholder.com/200"
              alt="Board Member Photo"
            />
            <h4>Member Name</h4>
            <p>Position/Title</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClubPageExample;
