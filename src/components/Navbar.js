import React from 'react';
import { Link } from 'react-router-dom';

const Navbar= () =>{
  return (
    // <Router>
    <nav className="navbar bg-primary">
        <h1>
            <i className='fa fa-github'></i>
            Github Finder
        </h1>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/About'>about</Link>
            </li>
        </ul>
    </nav>
//    </Router>
  );
}
export default Navbar;