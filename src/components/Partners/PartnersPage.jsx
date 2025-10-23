import React from 'react';
import { Link } from 'react-router-dom';
import './Partners.css';

const PartnersPage = () => {
  const partners = [
    {
      name: "Google",
      type: "Corporate Partner",
      description: "Google has been a key supporter of our mission, providing mentorship opportunities, technical workshops, and career guidance for our members.",
      logo: "/images/partners/google-logo.png",
      website: "https://www.google.com"
    },
    {
      name: "Microsoft",
      type: "Corporate Partner", 
      description: "Microsoft Innovation Hub has hosted exclusive tours and workshops for our members, offering insights into cutting-edge technology and career opportunities.",
      logo: "/images/partners/microsoft-logo.png",
      website: "https://www.microsoft.com"
    },
    {
      name: "PwC",
      type: "Corporate Partner",
      description: "PwC has provided valuable industry insights and networking opportunities, helping our members understand the intersection of technology and business.",
      logo: "/images/partners/pwc-logo.png",
      website: "https://www.pwc.com"
    },
    {
      name: "Northrop Grumman",
      type: "Corporate Partner",
      description: "Northrop Grumman has supported our mission through technical presentations and career development opportunities in aerospace and defense technology.",
      logo: "/images/partners/northrop-grumman-logo.png",
      website: "https://www.northropgrumman.com"
    }
  ];

  const sponsors = [
    {
      name: "UCI Donald Bren School of Information and Computer Sciences",
      type: "Academic Sponsor",
      description: "Our home school provides essential support, resources, and facilities that enable our organization to thrive and serve the student community.",
      logo: "/images/partners/uci-ics-logo.png",
      website: "https://www.ics.uci.edu"
    },
    {
      name: "UCI Student Organizations Leadership and Involvement (SOLI)",
      type: "Campus Partner",
      description: "SOLI provides guidance and support for student organizations, helping us maintain our status and access to campus resources.",
      logo: "/images/partners/uci-soli-logo.png",
      website: "https://involvement.uci.edu"
    }
  ];

  const PartnerCard = ({ partner }) => (
    <div className="partner-card scale-in">
      <div className="partner-logo">
        <img 
          src={partner.logo} 
          alt={`${partner.name} logo`}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div className="logo-placeholder" style={{display: 'none'}}>
          {partner.name === 'Google' && <span style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#4285F4'}}>G</span>}
          {partner.name === 'Microsoft' && <span style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#00BCF2'}}>M</span>}
          {partner.name === 'PwC' && <span style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#BE1E2D'}}>PwC</span>}
          {partner.name === 'Northrop Grumman' && <span style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#1B365D'}}>NG</span>}
          {partner.name === 'UCI Donald Bren School of Information and Computer Sciences' && <span style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#0066CC'}}>UCI ICS</span>}
          {partner.name === 'UCI Student Organizations Leadership and Involvement (SOLI)' && <span style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#0066CC'}}>UCI SOLI</span>}
          {!['Google', 'Microsoft', 'PwC', 'Northrop Grumman', 'UCI Donald Bren School of Information and Computer Sciences', 'UCI Student Organizations Leadership and Involvement (SOLI)'].includes(partner.name) && <i className="fas fa-building"></i>}
        </div>
      </div>
      <div className="partner-content">
        <h3>{partner.name}</h3>
        <p className="partner-type">{partner.type}</p>
        <p className="partner-description">{partner.description}</p>
        <a 
          href={partner.website} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="partner-link"
        >
          Visit Website <i className="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
  );

  return (
    <div className="partners-page page-transition">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="fade-in-up">Partners and Sponsors</h1>
          <p className="fade-in-up">Meet the organizations that support our mission of fostering diversity and inclusion in technology</p>
          <Link to="/about" className="cta-button fade-in-up">Back to About</Link>
        </div>
      </section>

      {/* Corporate Partners Section */}
      <section className="partners-section">
        <div className="container">
          <h2 className="fade-in-up">Corporate Partners</h2>
          <p className="section-description fade-in-up">
            These industry leaders provide mentorship, career opportunities, and technical resources to help our members succeed.
          </p>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <PartnerCard key={index} partner={partner} />
            ))}
          </div>
        </div>
      </section>

      {/* Academic & Campus Partners Section */}
      <section className="sponsors-section">
        <div className="container">
          <h2 className="fade-in-up">Academic & Campus Partners</h2>
          <p className="section-description fade-in-up">
            Our academic and campus partners provide the foundation and support that makes our organization possible.
          </p>
          <div className="partners-grid">
            {sponsors.map((sponsor, index) => (
              <PartnerCard key={index} partner={sponsor} />
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities Section */}
      <section className="partnership-opportunities-section">
        <div className="container">
          <div className="opportunities-content">
            <div className="opportunities-text fade-in-left">
              <h2>Interested in Partnering with Us?</h2>
              <p>
                We're always looking for new partners who share our mission of promoting diversity and inclusion in technology. 
                Whether you're a corporation, startup, or academic institution, there are many ways to get involved.
              </p>
              <div className="opportunities-list">
                <div className="opportunity-item">
                  <i className="fas fa-chalkboard-teacher"></i>
                  <span>Host workshops and technical sessions</span>
                </div>
                <div className="opportunity-item">
                  <i className="fas fa-handshake"></i>
                  <span>Provide mentorship opportunities</span>
                </div>
                <div className="opportunity-item">
                  <i className="fas fa-briefcase"></i>
                  <span>Offer internships and career opportunities</span>
                </div>
                <div className="opportunity-item">
                  <i className="fas fa-graduation-cap"></i>
                  <span>Support educational initiatives</span>
                </div>
              </div>
              <div className="cta-buttons">
                <a 
                  href="https://www.canva.com/design/DAGl29NyCvg/ZnVM_Ybdbt27NizKdSl1VQ/edit" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cta-button"
                >
                  View Sponsorship Packet
                </a>
                <a 
                  href="mailto:blackintech@uci.edu" 
                  className="cta-button secondary"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
