import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../store/redditSlice';
import logo from '../../logo.svg';
import '../Header/Header.css'


const Header = () => {
  const [searchTermPhrase, setSearchTermPhrase] = useState('');
  const searchTerm = useSelector((state) => state.reddit.searchTerm);
  const dispatch = useDispatch();

  const onSearchTermChange = (e) => {
    setSearchTermPhrase(e.target.value);
  };

  useEffect(() => {
    setSearchTermPhrase(searchTerm);
  }, [searchTerm]);

  const onSearchTermSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(searchTermPhrase));
  };

  return (
    <header className="head">
      <div className="header-container">
        <img className="reddit-logo" src={logo} alt="Reddit logo" />
      </div>
      <form className="search-bar-container" onSubmit={onSearchTermSubmit} >
        <span className='search-container'>
          <input 
            id='search' 
            value={searchTermPhrase} 
            onChange={onSearchTermChange}
            type="text"
            placeholder="      Search Reddit"
            aria-label="Search post"
          />
        </span>
         <button
          className='search-button'
          type='submit'
          onClick={onSearchTermSubmit}
          aria-label="Search"
        >
        Search
        </button>
      </form>
    </header>
  );
};

export default Header;