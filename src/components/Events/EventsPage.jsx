import React from 'react';
import { Link } from 'react-router-dom';
import './Events.css';

const EventsPage = () => {
  return (
    <div className="events-page page-transition">
      <div className="events-hero">
        <h1 className="fade-in-up">Events</h1>
        <p className="fade-in-up">Join us at our upcoming events to connect, learn, and grow together.</p>
        <div className="events-hero-buttons">
          <Link to="/events/upcoming" className="cta-button fade-in-up">View All Upcoming Events</Link>
          <Link to="/events/past" className="cta-button fade-in-up">View All Past Events</Link>
        </div>
      </div>

      <div className="events-cta fade-in-up">
        <h2>Host an Event With Us</h2>
        <p>Interested in collaborating on an event? We're always looking for partners!</p>
        <Link to="/get-involved" className="cta-button">Get in Touch</Link>
      </div>

      <div className="events-blog-cta fade-in-up">
        <h2>Stay Updated</h2>
        <p>Read about our latest events, workshops, and community highlights in our blog.</p>
        <Link to="/blog" className="cta-button">View Blog</Link>
      </div>
    </div>
  );
};

export default EventsPage; 