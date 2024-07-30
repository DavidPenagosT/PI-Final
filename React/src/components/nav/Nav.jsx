import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
  



  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const [searchOption, setSearchOption] = useState('name');
  const handleOptionChange = (event) => {
    setSearchOption(event.target.value);
  };


  return (
    <header >
      <Link to='/'>
        <img src='/logos/4.png' alt='logo' className='App-logo' />
      </Link>
      <div className='searchBar'>
        <label>Buscar</label>
        <input type='search' value={searchTerm} onChange={handleSearchChange} />
        <select value={searchOption} onChange={handleOptionChange}>
          <option value='name'>Nombre</option>
          <option value='id'>ID</option>
          <option value='gender'>Género</option>
        </select>
        <button>
          <Link to={`/search/${searchOption}=${searchTerm}`}>Buscar</Link>
        </button>
      </div>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/generos"}>Generos</Link>
        <Link to={"/otros"}>otros</Link>
      </div>
    </header>
  );
};

export default Nav;




