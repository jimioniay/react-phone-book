import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import NavContainer from './NavContainer';
import CustomRouter from './CustomRouter';

function Nav() {
  return (
    <Router>
      <NavContainer />
      <CustomRouter />
    </Router>
  );
}

export default Nav;
