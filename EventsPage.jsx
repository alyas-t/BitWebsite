import React, { useState, useEffect } from 'react';

const EventsPage = () => {
  // Original events data
  const [events] = useState([
    { name: "Introducing Black In Tech", date: "2025-01-13", location: "DBH 1420", image: "/images/2nd.jpg" },
    { name: "ICS Club Fair", date: "2025-01-15", location: "DBH 6013", image: "/images/1st.jpg" },
    { name: "Tech Startups Panel", date: "2025-01-27", location: "DBH 1420", image: "/images/3rd.jpg" },
    { name: "Mock Interview Workshop", date: "2025-2-3", location: "DBH 1420", image: "/images/4th.jpg" },
    { name: "UCI Alumni Panel", date: "2025-2-10", location: "TBD", image: "/images/5th.jpg" },
    { name: "Resume Building Workshop", date: "2025-2-24", location: "DBH 1420", image: "/images/6th.jpg" }
  ]);

  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    // Sort by ascending date
    const sorted = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));
    const now = new Date();

    // Separate upcoming and past
    const upcoming = sorted.filter(e => new Date(e.date) >= now);
    const past = sorted.filter(e => new Date(e.date) < now);

    setUpcomingEvents(upcoming);
    setPastEvents(past);
  }, [events]);

  // A small helper component for each event card
  const EventCard = ({ data, isHidden }) => {
    const [dimensions, setDimensions] = useState({ width: 'auto', height: 'auto' });

    const handleImageLoad = (e) => {
      const { naturalWidth, naturalHeight } = e.target;
      const aspectRatio = naturalWidth / naturalHeight;

      if (aspectRatio > 1) {
        setDimensions({ width: '400px', height: `${400 / aspectRatio}px` });
      } else {
        setDimensions({ width: `${400 * aspectRatio}px`, height: '400px' });
      }
    };

    if (isHidden) return null;

    return (
      <div className="event-card" style={{ width: dimensions.width, height: dimensions.height }}>
        <img
          src={data.image}
          alt={data.name}
          onLoad={handleImageLoad}
          style={{ display: 'block', width: '100%', height: 'auto' }}
        />
        <div className="overlay">
          <p><strong>Event:</strong> {data.name}</p>
          <p><strong>Date:</strong> {data.date}</p>
          <p><strong>Location:</strong> {data.location}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Inline CSS for demonstration; ideally extract into a .css file */}
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background-color: #ffffff;
          color: #000000;
        }
        header {
          width: 100%;
          background: transparent;
          padding: 0;
          color: white;
          position: relative;
          z-index: 1;
        }
        iframe {
          border: none;
          width: 100%;
          height: 100px;
        }

        .container {
          width: 90%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 20px;
        }

        .upcoming-events-background {
          background: linear-gradient(to bottom, #4a227a, #027b90);
          color: #ffffff;
          padding: 40px 0;
        }
        .upcoming-events-background .section.upcoming h2 {
          font-size: 28px;
          margin-bottom: 20px;
          color: #ffffff;
          text-transform: uppercase;
          text-align: center;
          border-bottom: 2px solid #ffffff;
          padding-bottom: 10px;
          display: inline-block;
        }
        .section {
          margin-bottom: 20px;
        }
        .section.past h2 {
          font-size: 28px;
          margin-bottom: 20px;
          color: #000000;
          text-transform: uppercase;
          text-align: center;
          border-bottom: 2px solid #000000;
          padding-bottom: 10px;
          display: inline-block;
        }
        hr {
          border: none;
          height: 1px;
          background-color: #ccc;
          margin: 0;
        }
        .events {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }
        .event-card {
          position: relative;
          display: inline-block;
          overflow: hidden;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }
        .event-card:hover .overlay {
          display: flex;
        }
        .overlay {
          display: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          color: #ffffff;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          border-radius: 8px;
          padding: 0px;
          font-size: 18px;
          line-height: 1.8;
        }
        .overlay p {
          margin: 5px 0;
          text-align: center;
          padding: 0;
        }
        .view-all-btn {
          display: block;
          margin: 20px auto 0;
          width: 225px;
          text-align: center;
          text-decoration: none;
          background-color: white;
          color: #007bff;
          padding: 10px 20px;
          font-size: 16px;
          font-weight: bold;
          border-radius: 30px;
          border: 2px solid #007bff;
        }
        .view-all-btn:hover {
          background-color: lightgrey;
        }
      `}</style>


      {/* TOP (GRADIENT) SECTION: Upcoming Events */}
      <div className="upcoming-events-background">
        <div className="container">
          <div className="section upcoming">
            <h2>Upcoming Events</h2>
            <div className="events">
              {upcomingEvents.slice(0, 3).map((ev, idx) => (
                <EventCard key={idx} data={ev} />
              ))}
            </div>
            <a href="events2.html" className="view-all-btn">
              View All Upcoming Events
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr />

      {/* BOTTOM (WHITE) SECTION: Past Events */}
      <div className="container">
        <div className="section past">
          <h2>Past Events</h2>
          <div className="events">
            {pastEvents.map((ev, idx) => (
              <EventCard key={idx} data={ev} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
