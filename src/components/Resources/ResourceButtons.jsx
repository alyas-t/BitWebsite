import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ResourceButtons.css';

function ResourceButtons() {
  const navigate = useNavigate();
  
  const resources = [
    {
      title: "Technical Resources",
      description: "View our technical resources",
      color: "#02153D",
      titleColor: "#BACFFD",
      link: "/resources/technical",
    },
    {
      title: "Industry News",
      description: "Stay updated with industry news",
      color: "#02153D",
      titleColor: "#BACFFD",
      link: "/resources/news",
    },
    {
      title: "Career Development",
      description: "Explore career development opportunities",
      color: "#4B227A",
      titleColor: "#DBBCFF",
      link: "/resources/career",
    },
    {
      title: "Partner Organizations",
      description: "Learn about our partner organizations",
      color: "#4B227A",
      titleColor: "#DBBCFF",
      link: "/resources/partners",
    },
    {
      title: "Community Forums",
      description: "Join discussions in our community forums",
      color: "#0197AF",
      titleColor: "#C6F7FF",
      link: "/resources/forums",
    },
    {
      title: "Internship Opportunities",
      description: "Explore Internship Opportunities",
      color: "#0197AF",
      titleColor: "#C6F7FF",
      link: "/resources/internships",
    },
  ];

  const handleNavigation = (link) => {
    navigate(link);
  };

  return (
    <div className="resources-page">
      <div className="resources-container">
        <h1 className="resources-title">Resources</h1>
        <p className="resources-description">
          Access a wide range of resources to support your journey in tech
        </p>
        <div className="resourceGrid">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="resourceCard"
              onClick={() => handleNavigation(resource.link)}
              style={{
                backgroundColor: resource.color,
              }}
            >
              <h3 style={{ color: resource.titleColor }}>{resource.title}</h3>
              <p>{resource.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResourceButtons; 