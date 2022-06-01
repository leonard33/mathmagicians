import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="container">
      <div className="logo">Math Magician</div>
      <ul>
        <Link className="lang" to="/">
          <li>Home</li>
        </Link>
        <Link className="lang" to="/calculator">
          <li>Calcultor</li>
        </Link>
        <Link className="lang" to="/quotes">
          <li>Quotes</li>
        </Link>
      </ul>
    </div>
  );
}
