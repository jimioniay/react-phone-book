import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Contacts from '../ContactComponents/Contacts';
import ContactList from '../ContactComponents/ContactList';

function CustomRouter() {
  return (
    <Switch>
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path="/contacts" component={Contacts} />
      <Route exact path="/contact-list" component={ContactList} />
    </Switch>
  );
}

export default CustomRouter;
