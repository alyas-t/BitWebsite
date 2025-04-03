import React from 'react';
import { Link } from 'react-router-dom';
import './GetInvolved.css';

const BoardResponsibilities = () => {
  return (
    <div className="get-involved-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="container">
          <h1 className="fade-in-up">Board Responsibilities</h1>
          <p className="fade-in-up">Learn about volunteer opportunities and board roles at Black in Tech at UCI</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        <section className="board-info-section">
          <div className="board-notice fade-in-up">
            <h2>Board Applications Status</h2>
            <div className="status-banner">
              <span className="status-icon">
                <i className="fas fa-clock"></i>
              </span>
              <p>Board applications are currently <strong>closed</strong> for this academic year. Please check back during Spring quarter for next year's opportunities.</p>
            </div>
          </div>

          <div className="board-roles fade-in-up">
            <h2 className="section-title">Board Positions & Responsibilities</h2>
            
            <div className="role-card fade-in-left">
              <h3>President</h3>
              <ul>
                <li>Lead the organization and oversee all operations</li>
                <li>Develop strategic plans and initiatives</li>
                <li>Represent the organization in official capacities</li>
                <li>Facilitate board meetings and delegate responsibilities</li>
                <li>Collaborate with external partners and organizations</li>
              </ul>
            </div>

            <div className="role-card fade-in-right">
              <h3>Vice President</h3>
              <ul>
                <li>Assist the President in leadership duties</li>
                <li>Step in during President's absence</li>
                <li>Coordinate internal operations</li>
                <li>Manage board member performance and engagement</li>
                <li>Help develop and implement organizational policies</li>
              </ul>
            </div>

            <div className="role-card fade-in-left">
              <h3>Marketing Chair</h3>
              <ul>
                <li>Develop and implement marketing strategies</li>
                <li>Manage social media accounts and content creation</li>
                <li>Design promotional materials for events and programs</li>
                <li>Build brand awareness on campus</li>
                <li>Track engagement metrics and adjust strategies accordingly</li>
              </ul>
            </div>

            <div className="role-card fade-in-right">
              <h3>Events Coordinator</h3>
              <ul>
                <li>Plan and execute organization events</li>
                <li>Coordinate logistics, venue bookings, and schedules</li>
                <li>Develop event budgets and manage resources</li>
                <li>Recruit and manage event volunteers</li>
                <li>Conduct post-event evaluations</li>
              </ul>
            </div>

            <div className="role-card fade-in-left">
              <h3>Treasurer</h3>
              <ul>
                <li>Manage organizational finances and budget</li>
                <li>Process reimbursements and payments</li>
                <li>Track expenses and create financial reports</li>
                <li>Assist with funding applications</li>
                <li>Ensure compliance with financial policies</li>
              </ul>
            </div>

            <div className="role-card fade-in-right">
              <h3>Technical Director</h3>
              <ul>
                <li>Manage the organization's website and technical resources</li>
                <li>Coordinate technical workshops and skill-building events</li>
                <li>Develop technical content for members</li>
                <li>Support other board members with technical needs</li>
                <li>Identify technology-related opportunities for members</li>
              </ul>
            </div>
          </div>

          <div className="volunteer-opportunities fade-in-up">
            <h2 className="section-title">Other Ways to Volunteer</h2>
            <p>Even though board applications are closed, there are still many ways to volunteer with Black in Tech at UCI:</p>
            
            <div className="opportunity-grid">
              <div className="opportunity-item fade-in-left">
                <i className="fas fa-chalkboard-teacher"></i>
                <h3>Workshop Facilitator</h3>
                <p>Share your technical skills by leading workshops for our members.</p>
              </div>
              
              <div className="opportunity-item fade-in-right">
                <i className="fas fa-camera"></i>
                <h3>Event Photographer</h3>
                <p>Help us capture the moments at our events through photography and videography.</p>
              </div>
              
              <div className="opportunity-item fade-in-left">
                <i className="fas fa-laptop-code"></i>
                <h3>Project Contributor</h3>
                <p>Contribute to our technical projects and initiatives.</p>
              </div>
              
              <div className="opportunity-item fade-in-right">
                <i className="fas fa-hands-helping"></i>
                <h3>Event Support</h3>
                <p>Assist with event setup, registration, and coordination.</p>
              </div>
            </div>
            
            <div className="contact-info fade-in-up">
              <p>Interested in volunteering? Contact us at <a href="mailto:blackintech@uci.edu">blackintech@uci.edu</a> to express your interest and learn about current opportunities.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer removed as it's now part of the Layout component */}
    </div>
  );
};

export default BoardResponsibilities; 