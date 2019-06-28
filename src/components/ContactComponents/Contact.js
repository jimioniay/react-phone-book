import React from 'react';

function Contact(props) {
  const cardStyle = {
    maxWidth: '18rem',
  };
  return (
    <div className="card">
      <div className="card text-white bg-dark mb-3" style={cardStyle}>
        <div className="card-header">{props.name}</div>
        <div className="card-body">
          <h5 className="card-title">{props.email}</h5>
          <h5 className="card-title">{props.mobileNumber}</h5>
        </div>
      </div>
    </div>
  );
}

export default Contact;
