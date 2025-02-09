import React from 'react';
import './ResourceButtons.css';
function ResourceButtons() {
  const resources = [
    {
      title: "Technical Resources",
      description: "View our technical resources",
      color: "#02153D",
      titleColor: "#BACFFD",
      link: "/technical-resources",
    },
    {
      title: "Industry News",
      description: "Stay updated with industry news",
      color: "#02153D",
      titleColor: "#BACFFD",
      link: "/industry-news",
    },
    {
      title: "Career Development",
      description: "Explore career development opportunities",
      color: "#4B227A",
      titleColor: "#DBBCFF",
      link: "/career-development",
    },
    {
      title: "Partner Organizations",
      description: "Learn about our partner organizations",
      color: "#4B227A",
      titleColor: "#DBBCFF",
      link: "/partner-organizations",
    },
    {
      title: "Community Forums",
      description: "Join discussions in our community forums",
      color: "#0197AF",
      titleColor: "#C6F7FF",
      link: "/community-forums",
    },
    {
      title: "Internship Opportunities",
      description: "Explore Internship Opportunities",
      color: "#0197AF",
      titleColor: "#C6F7FF",
      link: "/internship-opportunities",
    },
  ];

  const handleNavigation = (link) => {
 
    window.location.href = link;
  };

  return (

    <div className="resourceGrid">
      {resources.map((resource, index) => (
        <div
          key={index}
          className="resourceCard"
          onClick={() => handleNavigation(resource.link)}
          style={{
            backgroundColor: resource.color,
            padding: "20px",
            borderRadius: "8px",
            cursor: "pointer",
            color: "white",
            textAlign: "center",
            margin: "10px",
          }}
        >
          <h3 style={{ margin: "0", fontSize: "20px", color: resource.titleColor}}>{resource.title}</h3>
          <p style={{ margin: "0", fontSize: "14px"}}>{resource.description}</p>
        </div>
      ))}
    </div>
  );
}


export default ResourceButtons;