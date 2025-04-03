import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Events.css';
import PlaceholderImage from '../PlaceholderImage';

const EventsPage = () => {
  // Events data with fixed image URLs
  const events = [
    {
      id: 1,
      title: "Introducing Black In Tech",
      date: "January 13, 2025",
      location: "DBH 1420",
      description: "Get to know the board, enjoy pizza, and participate in brain teaser games. Don't forget to RSVP via our linktree!",
      image: "https://i.ibb.co/S70zvswY/Week-2-Meeting-Post.jpg",
      url: "/events/introducing-bit"
    },
    {
      id: 2,
      title: "ICS Club Fair",
      date: "January 15, 2025",
      location: "DBH 6011",
      description: "Join us at the ICS Club Fair to learn about Black in Tech at UCI and how to get involved.",
      image: "https://i.ibb.co/JWjL91Ds/Week-2-ICS-Fair-Post.jpg",
      url: "/events/ics-club-fair"
    },
    {
      id: 3,
      title: "Tech Talk: Tech Startups Panel",
      date: "January 27, 2025",
      location: "DBH 1420",
      description: "Hear from Charles Sine (Inclusive Health Founder) and Gregg Klang (FemTech Founder) about their experiences in the startup ecosystem.",
      image: "https://i.ibb.co/7xX6Hn7d/Week-4-Tech-Talk-Post.jpg",
      url: "/events/tech-startups-panel"
    },
    {
      id: 4,
      title: "Mock Interviews Workshop",
      date: "February 3, 2025",
      location: "DBH 1420",
      description: "Gain insights on how to tackle industry technical & behavioral interview questions with Walter Myers III and Nick Bell from Microsoft.",
      image: "https://i.ibb.co/mVsT8V93/Week-5-Mock-Interview.jpg",
      url: "/events/mock-interviews"
    },
    {
      id: 5,
      title: "Tech Talk: UCI Alumni Panel",
      date: "February 10, 2025",
      location: "Student Center, Emerald Bay A",
      description: "Connect with UCI alumni including Anthony Mays (Founder/Career Coach), Pierce Taylor (Software Engineer at Google), and Briana Jallow (Technology Consultant).",
      image: "https://i.ibb.co/vCY57q4X/Week-6-Tech-Talk-Post.jpg",
      url: "/events/alumni-panel"
    },
    {
      id: 6,
      title: "Google Company Tour",
      date: "February 21, 2025",
      location: "Los Angeles",
      description: "Join us for an exclusive tour of Google's Los Angeles office. Transportation will be provided for this half-day experience.",
      image: "https://i.ibb.co/2Yvbd5jr/Google-Tour-Post.jpg",
      url: "/events/google-tour"
    },
    {
      id: 7,
      title: "Resume Building Workshop",
      date: "February 24, 2025",
      location: "DBH 1420",
      description: "Learn how to optimize your resume and get peer-to-peer review with Walter Myers III and Kamika Dillard from Microsoft.",
      image: "https://i.ibb.co/LzzWjWmm/Week-8-Resume-Workshop.jpg",
      url: "/events/resume-workshop"
    }
  ];

  // Modern event card component
  const EventCard = ({ event }) => {
    const [imgError, setImgError] = useState(false);

    return (
      <div className="event-card scale-in">
        <div className="event-image">
          {!imgError ? (
            <img
              src={event.image}
              alt={event.title}
              onError={() => setImgError(true)}
            />
          ) : (
            <PlaceholderImage text={event.title} width="100%" height="100%" />
          )}
        </div>
        <div className="overlay">
          <h3>{event.title}</h3>
          <p className="date-location">{event.date} | {event.location}</p>
          <p className="description">{event.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="events-page page-transition">
      <div className="events-hero">
        <h1 className="fade-in-up">Events</h1>
        <p className="fade-in-up">Join us at our upcoming events to connect, learn, and grow together.</p>
        <Link to="/events/upcoming" className="cta-button fade-in-up">View All Upcoming Events</Link>
      </div>

      <div className="events-content">
        <h2 className="fade-in-up">Featured Events</h2>
        <div className="events-grid">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      <div className="events-cta fade-in-up">
        <h2>Host an Event With Us</h2>
        <p>Interested in collaborating on an event? We're always looking for partners!</p>
        <Link to="/get-involved" className="cta-button">Get in Touch</Link>
      </div>
    </div>
  );
};

export default EventsPage; 