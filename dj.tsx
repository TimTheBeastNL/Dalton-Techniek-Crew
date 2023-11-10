import React from 'react';

const FullScreenIframePage: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        title="DJ"
        src="https://daltonvoorburg.nl" // Replace with the URL you want to embed
        frameBorder="0"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        allowFullScreen
      />
    </div>
  );
};

export default FullScreenIframePage;
