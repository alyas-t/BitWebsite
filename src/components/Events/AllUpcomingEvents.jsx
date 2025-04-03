import React from 'react';
import { Link } from 'react-router-dom';
import './Events.css';

const AllUpcomingEvents = () => {
  return (
    <div className="events-page page-transition">
      {/* Hero Section */}
      <div className="events-hero">
        <h1 className="fade-in-up">Upcoming Events</h1>
        <p className="fade-in-up">Stay tuned for our exciting lineup of tech talks, workshops, and networking opportunities.</p>
        <Link to="/events" className="cta-button fade-in-up">Back to Events</Link>
      </div>
      
      {/* Coming Soon Message */}
      <div className="events-content">
        <div className="coming-soon-container fade-in-up">
          <div className="coming-soon-message scale-in">
            <div className="coming-soon-icon">
              <i className="far fa-calendar-alt"></i>
            </div>
            <h2>Coming Soon Next Quarter!</h2>
            <p>We're planning an exciting lineup of events for the next quarter. Check back later or follow us on social media to be the first to know when new events are announced.</p>
            <div className="coming-soon-actions">
              <Link to="/get-involved" className="cta-button">Get Involved</Link>
              <a href="https://www.instagram.com/bit.uci/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="social-button">
                <i className="fab fa-instagram"></i> Follow Us on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer removed as it's now part of the Layout component */}
    </div>
  );
};

export default AllUpcomingEvents; 