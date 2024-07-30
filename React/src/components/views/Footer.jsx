import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (

    <footer>
<h4 className='titulo'>
      <Link to='/'>
        <img src='/logos/4.png' alt='logo' className='App-logo' />
      </Link>
      <Link to='/' >Inicio </Link></h4>

      <div>
        <h2>VideoGames Project</h2>
      </div>
    </footer>
  );
};

export default Footer;