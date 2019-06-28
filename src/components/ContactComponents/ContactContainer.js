import React from 'react';

import AddContacts from './AddContact';
import FigCaption from './FigCaption';

function ContactContainer(props) {
  return (
    <div className="row">
      <div className="col-md-6 col-sm-12 col-md-6 ">
        <FigCaption />
      </div>
      <div className="col-md-6 col-sm-12 col-md-6">
        {/* {console.log('inside contact container...: ', JSON.stringify(props))} */}
        <AddContacts
          // name={props.name}
          // email={props.email}
          // mobileNumber={props.mobileNumber}
          // handleSubmit={props.handleSubmit}
          // handleChange={props.handleChange}
          {...props}
        />
      </div>
    </div>
  );
}

export default ContactContainer;
