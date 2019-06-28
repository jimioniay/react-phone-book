import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Nav from './NavComponents/Nav';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Nav />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
