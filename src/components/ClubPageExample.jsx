import React from 'react';
import './ClubPageExample.css';
import PlaceholderImage from './PlaceholderImage';

const ClubPageExample = () => {
  const boardMembers = [
    {
      name: "Chidera Okoroama",
      position: "President",
      image: '/images/BoardSolo/ChideraSolo.jpg',
      bio: "Junior Business Information Management major with a passion for promoting diversity in tech and creating inclusive communities."
    },
    {
      name: "Juan Muhirwe",
      position: "Vice President",
      image: '/images/BoardSolo/JuanSolo.jpeg',
      bio: "Sophomore Data Science Major focused on implementing machine learning solutions and bridging the diversity gap in AI development."
    },
    {
      name: "Alyas Thomas",
      position: "Webmaster",
      image: '/images/BoardSolo/AlyasSolo.jpg',
      bio: "Sophomore Software Engineering major with expertise in full-stack development and a dedication to creating beautiful, user-friendly interfaces."
    },
    {
      name: "Jason Phan",
      position: "Web Developer",
      image: '/images/BoardSolo/JasonSolo.jpg',
      bio: "Junior Computer Science major passionate about web technologies and developing inclusive digital spaces that represent diverse backgrounds."
    },
    {
      name: "Steven Gorlicki",
      position: "Web Developer",
      image: '/images/BoardSolo/StevenSolo.jpg',
      bio: "Junior Software Engineer with a focus on front-end development and creating engaging user experiences that celebrate diversity."
    },
    {
      name: "Ijeoma Arisa",
      position: "Corporate Outreach",
      image: '/images/BoardSolo/IjeomaSolo.jpg',
      bio: "Senior Computer Science major with strong networking skills and a passion for connecting underrepresented students with industry opportunities."
    },
    {
      name: "Daniel Gonzales",
      position: "Marketing",
      image: '/images/BoardSolo/DanielSolo.jpg',
      bio: "Senior Fine Arts major leveraging creative skills to develop impactful visual campaigns that highlight the achievements of minorities in tech."
    },
    {
      name: "Kaneto Ejizu",
      position: "Co-Event Chair",
      image: '/images/BoardSolo/KanetoSolo.jpg',
      bio: "Junior Software Engineer with a flair for event planning and creating engaging workshops that build technical skills and community connections."
    },
    {
      name: "Chibueze Ndukwe",
      position: "Co-Event Chair",
      image: '/images/BoardSolo/ChibuezeSolo.jpg',
      bio: "Junior Electrical Engineer bringing technical expertise and creative programming ideas to our events to foster learning and networking opportunities."
    },
    {
      name: "Layla Harvey",
      position: "Events & Programming Intern",
      image: "images/BoardSolo/LaylaSolo.jpeg",
      bio: "Freshman Biomedical Engineer contributing fresh ideas and technical insight to our events, creating spaces for learning, connection, and growth in the tech community."
    },
    {
      name: "Derrick Thrower",
      position: "Technical Operations Intern",
      image: "images/BoardSolo/DerrickSolo.JPG",
      bio: "Freshman Computer Science who loves to work on new and interesting projects and is passionate about creating a welcoming space for the tech community."
    },
    {
      name: "Ival Momoh",
      position: "Technical Operations Intern",
      image: "images/BoardSolo/IvalSolo.jpeg",
      bio: "Freshman Computer Engineering major with a passion for building innovative, inclusive tech solutions and bridging the gap between software and hardware through intuitive web experiences."
    },
    {
      name: "Angela Wang",
      position: "Design and Marketing Intern",
      image: "images/BoardSolo/AngelaSolo.JPG",
      bio: "Sophomore Informatics major creating intentional designs that promote opportunities for and celebrate the successes of marginalized communities in technology."
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

      {/* Accomplishments Section */}
      <section className="YearInReview-section">
        <div className="container">
          <h2 className="fade-in-up section-title">Year In Review</h2>
          <div className="accomplishments-content">
            <div className="accomplishments-text fade-in-left">
              <p>
                This year, Black in Tech achieved significant growth across all platforms, gaining 350 Instagram followers, 47 Discord members, and 30 LinkedIn connections. Our core membership expanded to 10-15 active participants who engaged in exclusive opportunities including tours of Google LA, Google Irvine, and Microsoft Innovation Hub.
              </p>
              <p>
                We successfully brought industry leaders from Google, Microsoft, PwC, and Northrop Grumman to speak with our members while actively pursuing sponsorship partnerships with major tech companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Section */}
      <section className="sponsorship-section">
        <div className="container">
          <div className="info-content">
            <div className="info-text fade-in-left">
              <h2>Sponsorship Opportunities</h2>
              <p>
              Companies interested in partnering with Black in Tech can access our comprehensive Sponsorship Packet and connect with us directly at blackintech@uci.edu.
              </p>
              <div className="cta-buttons ">
                <a href="https://www.canva.com/design/DAGl29NyCvg/ZnVM_Ybdbt27NizKdSl1VQ/edit" target="_blank" rel="noopener noreferrer" className="cta-button">Sponsorship Packet</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Section */}
      <section className="mentorship-section">
        <div className="container">
          <h2 className="fade-in-up">Mentorship Program</h2>
          <div className="mentorship-content">
            <div className="mentorship-text fade-in-right">
              <p>
                Our structured mentorship program pairs students with industry professionals to provide career guidance and skill development. The program details and application timeline are outlined in our promotional materials, with specific dates and requirements clearly defined for interested participants.
              </p>
              <p>
                Throughout the year, we hosted workshops and networking sessions that drew strong attendance and created meaningful connections. Our programming directly contributed to member success, including internship placements, job offers, and skill development that enhanced academic and professional trajectories.
              </p>
              <div className="cta-buttons ">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfl-axJgpCz0GZ58piuUvqUaoyF_BYNiouwpRPfE3XTDrrhbw/viewform" target="_blank" rel="noopener noreferrer" className="cta-button">Mentorship Program Form</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Highlights Section */}
      <section className="event-highlights-section">
        <div className="container">
          <h2 className="fade-in-up">Event Highlights</h2>
          <div className="event-highlights-content">
            <div className="event-highlights-text fade-in-up">
              <p>
                Throughout the year, we hosted workshops and networking sessions that drew strong attendance and created meaningful connections. Our programming directly contributed to member success, including internship placements, job offers, and skill development that enhanced academic and professional trajectories.
              </p>
            </div>
            <div className="event-highlights-images">
              <div className="event-image scale-in">
                <img 
                  src="/images/BlogPost/python workshop.jpg" 
                  alt="Python Workshop Event" 
                  onError={(e) => PlaceholderImage.handleImageError(e, 'Python Workshop Event')}
                />
              </div>
              <div className="event-image scale-in">
                <img 
                  src="/images/BlogPost/WIL_Colab.jpg" 
                  alt="WIL Collaboration Event" 
                  onError={(e) => PlaceholderImage.handleImageError(e, 'WIL Collaboration Event')}
                />
              </div>
              <div className="event-image scale-in">
                <img 
                  src="/images/BlogPost/MIrcrosoft tour.gif" 
                  alt="Microsoft Tour Event" 
                  onError={(e) => PlaceholderImage.handleImageError(e, 'Microsoft Tour Event')}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Vision Section */}
      <section className="vision-section">
        <div className="container">
          <h2 className="fade-in-up">Community & Future Vision</h2>
          <div className="vision-cards">
            <div className="vision-card scale-in">
              <div className="icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Strategic Partnerships</h3>
              <p>Strengthening campus diversity initiatives through collaborations with other organizations.</p>
            </div>
            <div className="vision-card scale-in">
              <div className="icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Measurable Impact</h3>
              <p>Creating measurable impact on student outcomes and academic success.</p>
            </div>
            <div className="vision-card scale-in">
              <div className="icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Future Growth</h3>
              <p>Developing new partnerships and expanding programming to serve more students.</p>
            </div>
            <div className="vision-card scale-in">
              <div className="icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Community Building</h3>
              <p>Maintaining our commitment to excellence and inclusive community building.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="get-involved-section">
        <div className="container">
          <h2 className="fade-in-up">Get Involved</h2>
          <div className="get-involved-content">
            <div className="get-involved-text fade-in-up">
              <p>
                Students can join Black in Tech through our social media channels, sign up for our mentorship program, and participate in upcoming summer events. We encourage applications for leadership positions and thank all sponsors, speakers, faculty advisors, and graduating seniors who made this year's success possible.
              </p>
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