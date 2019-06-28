import React, { useState, useEffect } from 'react';
import Contact from './Contact';

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    let tempContacts;
    if (localStorage.getItem('contacts') === null) {
      tempContacts = [];
    } else {
      tempContacts = JSON.parse(localStorage.getItem('contacts'));
    }
    return setContacts(tempContacts);
  };
  const contact = contacts.map(item => {
    return <Contact key={item.id} {...item} />;
  });

  return (
    <div className="padding">
      <div className="card-columns">{contact}</div>
    </div>
  );
}

export default ContactList;
