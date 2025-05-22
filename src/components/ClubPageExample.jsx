import React from 'react';
import './ClubPageExample.css';
import PlaceholderImage from './PlaceholderImage';

const ClubPageExample = () => {
  const boardMembers = [
    {
      name: "Chidera Okoroama",
      position: "President",
      image: "src/components/images/board1.jpg",
      bio: "Junior Business Information Management major with a passion for promoting diversity in tech and creating inclusive communities."
    },
    {
      name: "Juan Muhirwe",
      position: "Vice President",
      image: "src/components/images/board2.jpg",
      bio: "Sophomore Data Science Major focused on implementing machine learning solutions and bridging the diversity gap in AI development."
    },
    {
      name: "Alyas Thomas",
      position: "Webmaster",
      image: "src/components/images/board3.jpg",
      bio: "Sophomore Software Engineering major with expertise in full-stack development and a dedication to creating beautiful, user-friendly interfaces."
    },
    {
      name: "Jason Phan",
      position: "Web Developer",
      image: "src/components/images/board4.jpg",
      bio: "Junior Computer Science major passionate about web technologies and developing inclusive digital spaces that represent diverse backgrounds."
    },
    {
      name: "Steven Gorlicki",
      position: "Web Developer",
      image: "src/components/images/board5.jpg",
      bio: "Junior Software Engineer with a focus on front-end development and creating engaging user experiences that celebrate diversity."
    },
    {
      name: "Ijeoma Arisa",
      position: "Corporate Outreach",
      image: "src/components/images/board6.jpg",
      bio: "Senior Computer Science major with strong networking skills and a passion for connecting underrepresented students with industry opportunities."
    },
    {
      name: "Ngozi Charles",
      position: "Treasurer",
      image: "src/components/images/board8.jpg",
      bio: "Sophomore Computer Science Major with a knack for financial management and ensuring resources are allocated to best serve our community."
    },
    {
      name: "Christine Oladipo",
      position: "Secretary",
      image: "https://i.ibb.co/fKMyxLS/IMG-1365.jpg",
      bio: "Sophomore Computer Science Major with exceptional organizational skills and a dedication to maintaining clear communication within the organization."
    },
    {
      name: "Daniel Gonzales",
      position: "Marketing",
      image: "https://i.ibb.co/6JHtq0Lc/IMG-1333.jpg",
      bio: "Senior Fine Arts major leveraging creative skills to develop impactful visual campaigns that highlight the achievements of minorities in tech."
    },
    {
      name: "Kaneto Ejizu",
      position: "Co-Event Chair",
      image: "src/components/images/boardsecondlast.jpg",
      bio: "Junior Software Engineer with a flair for event planning and creating engaging workshops that build technical skills and community connections."
    },
    {
      name: "Chibueze Ndukwe",
      position: "Co-Event Chair",
      image: "src/components/images/boardlast.jpg",
      bio: "Junior Electrical Engineer bringing technical expertise and creative programming ideas to our events to foster learning and networking opportunities."
    }
  ];

  return (
    <div className="about-page page-transition">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="fade-in-up">About Us</h1>
          <p className="fade-in-up">Learn about our mission, values, and the team behind Black in Tech at UCI</p>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="container">
          <div className="info-content">
            <div className="info-text fade-in-left">
              <h2>Who We Are</h2>
              <p>
                Black in Tech at UCI is a student-led organization dedicated to fostering a supportive community for Black students interested in technology fields. Founded in 2024, we provide resources, networking opportunities, and skill-building workshops to help our members thrive in their academic and professional journeys.
              </p>
              <p>
                Our community is inclusive and welcoming to students from all backgrounds who are interested in technology and are passionate about diversity and inclusion in the tech industry.
              </p>
            </div>
            <div className="info-image fade-in-right">
              <img 
                src="https://i.ibb.co/YCtgcHw/IMG-1718.jpg" 
                alt="Students collaborating" 
                onError={(e) => PlaceholderImage.handleImageError(e, 'Students collaborating')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <h2 className="fade-in-up">Our Mission</h2>
          <div className="mission-cards">
            <div className="mission-card scale-in">
              <div className="icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Education</h3>
              <p>Provide educational resources and workshops to develop technical skills and knowledge.</p>
            </div>
            <div className="mission-card scale-in">
              <div className="icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Community</h3>
              <p>Foster a supportive community for Black students in technology fields.</p>
            </div>
            <div className="mission-card scale-in">
              <div className="icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3>Opportunities</h3>
              <p>Connect members with career and internship opportunities in the tech industry.</p>
            </div>
            <div className="mission-card scale-in">
              <div className="icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Mentorship</h3>
              <p>Facilitate mentorship between industry professionals and students.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="board-section">
        <div className="container">
          <h2 className="fade-in-up">Meet Our Board</h2>
          <div className="board-members">
            {boardMembers.map((member, index) => (
              <div className="board-member scale-in" key={index}>
                <div className="member-image">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    onError={(e) => PlaceholderImage.handleImageError(e, member.name)}
                  />
                </div>
                <h3>{member.name}</h3>
                <p className="position">{member.position}</p>
                <p className="bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClubPageExample; 