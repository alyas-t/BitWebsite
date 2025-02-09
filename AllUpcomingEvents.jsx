import React, { useState, useEffect } from 'react';

const AllUpcomingEvents = () => {
  // Original events data
  const [events] = useState([
    { name: "Introducing Black In Tech", date: "2025-01-13", location: "DBH 1420", image: "/images/2nd.jpg" },
    { name: "ICS Club Fair", date: "2025-01-15", location: "DBH 6013", image: "/images/1st.jpg" },
    { name: "Tech Startups Panel", date: "2025-01-27", location: "DBH 1420", image: "/images/3rd.jpg" },
    { name: "Mock Interview Workshop", date: "2025-2-3", location: "DBH 1420", image: "/images/4th.jpg" },
    { name: "UCI Alumni Panel", date: "2025-2-10", location: "TBD", image: "/images/5th.jpg" },
    { name: "Resume Building Workshop", date: "2025-2-24", location: "DBH 1420", image: "/images/6th.jpg" }
  ]);

  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    const now = new Date();
    // Sort by ascending date
    const sorted = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));
    // Filter only upcoming
    const upcomingList = sorted.filter(e => new Date(e.date) >= now);
    setUpcoming(upcomingList);
  }, [events]);

  // A small helper component for each event card
  const EventCard = ({ data }) => {
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
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(to bottom, #4a227a, #027b90);
          background-attachment: fixed;
          background-size: cover;
          color: #ffffff;
          height: 100%;
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
        .section {
          margin-bottom: 40px;
        }
        .section h2 {
          font-size: 28px;
          margin-bottom: 20px;
          color: #ffffff;
          text-transform: uppercase;
          text-align: center;
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
          padding: 0;
          font-size: 18px;
          line-height: 1.8;
        }
        .overlay p {
          margin: 5px 0;
          text-align: center;
          padding: 0;
        }
      `}</style>



      <div className="container">
        <div className="section">
          <h2>All Upcoming Events</h2>
          <div className="events" id="upcoming-events">
            {upcoming.map((ev, idx) => (
              <EventCard key={idx} data={ev} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUpcomingEvents;
