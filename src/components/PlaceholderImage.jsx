import React from 'react';

const PlaceholderImage = ({ alt, className, style }) => {
  const colors = {
    primary: '#4B227A',
    secondary: '#0197AF',
    accent: '#007BFF'
  };
  
  // Select a random color from the colors object
  const bgColor = Object.values(colors)[Math.floor(Math.random() * Object.values(colors).length)];
  
  return (
    <div 
      className={className}
      style={{
        backgroundColor: bgColor,
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '200px',
        borderRadius: '8px',
        textAlign: 'center',
        padding: '20px',
        ...style
      }}
    >
      <div>
        <span style={{ fontSize: '2rem', display: 'block', marginBottom: '10px' }}>
          <i className="fas fa-image"></i>
        </span>
        <p>{alt || 'Image'}</p>
      </div>
    </div>
  );
};

export default PlaceholderImage; 