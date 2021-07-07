import React from "react";
import { Link } from 'react-router-dom';

import './Navigation.scss';

export const Navigation:React.FC = () => {
  
  return (
    <header className="header">
      <nav className="header_nav">
        <ul className="header_ul">
          <li className="header_li">
            <Link to="/" className="header_link">
              Home Page
            </Link>
          </li>
          <li className="header_li">
            <Link to="/todos" className="header_link">
              Todos
            </Link>
          </li>
          <li className="header_li">
            <Link to="/users" className="header_link">
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
