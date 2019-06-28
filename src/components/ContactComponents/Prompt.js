import React from 'react';

const Prompt = props => {
  console.log('prompt: ', props);
  return (
    <span className="lead">
      <p className="text-danger text-center">{props.prompt.message}</p>
    </span>
  );
};

export default Prompt;
