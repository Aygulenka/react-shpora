// Layout.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
<<<<<<< HEAD
// Correct import
import Button from './buttons/button';
=======
import Button from './buttons/Button';
>>>>>>> a8809cbb6b49448df244dffa991779236cb05f8d
import logo from './logo192.png';
import './logo.css';
import './layout.css';

const Layout = ({ children }) => {

  return (
    <div>
      <div className="header">
        <div className="header-left">
          <Link to="/" className="home-link">
            <FaHome />
          </Link>
        </div>
        <h1 className="general">Основная теория по библиотеке React</h1>
        <img src={logo} alt="Логотип" className="logo" />
      </div>
      <div className="container">
        {children}
        <div className="menu">
          <Button to="/Components" className="button">Components</Button>
          <Button to="/Propses" className="button">Props</Button>
          <Button to="/State" className="button">State</Button>
          <Button to="/LifyCycle">LifyCycle</Button>
          <Button to="/Events">Events</Button>
          <Button to="/Key">Key</Button>
          <Button to="/Refs">Refs</Button>
          <Button to="/AsynchronousReq">Async. Requests</Button>
          <Button to="/VirtDom">Virtual Dom</Button>
          <Button to="/Frag">Fragment</Button>
          <Button to="/ReactMemo">React.memo</Button>
          <Button to="/UsEf">use Effect</Button>
          <Button to="/Rout">Router</Button>
          <Button to="/Cont">Context</Button>
          <Button to="/Form">Form</Button>
        </div>
      </div>
    </div>
  );
};

export default Layout;



