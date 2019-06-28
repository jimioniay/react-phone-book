import React, { useState } from 'react';
import uuidv4 from 'uuid/v4';
import { Redirect } from 'react-router-dom';

import ContactContainer from './ContactContainer';

import Prompt from './Prompt';

function Contacts() {
  const [contact, setContact] = useState({
    id: '',
    name: '',
    email: '',
    mobileNumber: '',
    officeNumber: '',
  });
  const [prompt, setPrompt] = useState({
    message: '',
    status: false,
  });

  const [redirect, setRedirect] = useState(false);

  const handleChange = event => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      setContact({
        ...contact,
        [name]: checked,
        id: uuidv4(),
      });
    } else {
      setContact({
        ...contact,
        [name]: value,
        id: uuidv4(),
      });
    }

    console.log(
      contact.id,
      ' ',
      contact.name,
      ' ',
      contact.email,
      ' ',
      contact.mobileNumber,
      ' ',
      contact.officeNumber,
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    const lsContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    console.log('lsContacts: ', lsContacts);
    function contactExists() {
      for (let i = 0; i < lsContacts.length; i++) {
        return lsContacts[i].mobileNumber === contact.mobileNumber
          ? true
          : false;
      }
    }

    // const contactExists = lsContacts.map(lsContact => {
    //   console.log(`${lsContact.mobileNumber} === ${contact.mobileNumber}`);
    //   //   return lsContact.mobileNumber === contact.mobileNumber;
    //   return false;
    // });
    console.log('dupCheck: ', contactExists());
    if (contactExists() === true) {
      setPrompt({
        message: 'Mobile number already exists',
        status: true,
      });
    } else {
      lsContacts.push(contact);
      localStorage.setItem('contacts', JSON.stringify(lsContacts));
      
    }
  };

  function redirect() {
    return <Redirect to="/contact-list" />;
  }

  return (
    <div className="container-fluid">
      {prompt.status ? <Prompt prompt={prompt} /> : null}
      <ContactContainer
        contact={contact}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
export default Contacts;
