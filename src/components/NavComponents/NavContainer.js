import React from 'react';
import { Link } from 'react-router-dom';

function NavContainer() {
  return (
    <ul className="nav justify-content-center">
      <Link to="/home">
        <li className="nav-item">
          <span className="nav-link active">Home</span>
        </li>
      </Link>
      <Link to="/contacts">
        <li className="nav-item">
          <span className="nav-link active">Contact</span>
        </li>
      </Link>
      <Link to="/users">
        <li className="nav-item">
          <span className="nav-link active">Users</span>
        </li>
      </Link>
      <Link to="/staffs">
        <li className="nav-item">
          <span className="nav-link active">Staffs</span>
        </li>
      </Link>
    </ul>
  );
}

export default NavContainer;
