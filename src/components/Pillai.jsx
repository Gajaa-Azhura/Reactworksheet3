import React from 'react';

const Pillai = ({ name, age, gender, image, bio }) => {
  const handleClick = () => {
    console.log(`Hi from ${name}!`);
  };

  const cardStyle = {
    margin: '10px',
    padding: '10px',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%', // Circular image
    display: 'block',
    margin: '0 auto', // Center the image
  };

  const buttonStyle = {
    padding: '5px 10px',
    marginTop: '10px',
    cursor: 'pointer',
  };

  return (
    <div style={cardStyle}>
      {image ? (
        <img src={image} alt={`${name}'s profile`} style={imageStyle} onError={() => console.log(`Failed to load image for ${name}`)} />
      ) : (
        <p>No image available</p>
      )}
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
      <p>{bio}</p>
      <button style={buttonStyle} onClick={handleClick}>
        Say Hi
      </button>
    </div>
  );
};

export default Pillai;