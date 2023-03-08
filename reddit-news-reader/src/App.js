import React from 'react';
import './App.css';
import Header from './features/Header/Header';
import Home from './features/Home/Home';
import Subreddits from './features/Subreddits/Subreddits';

function App() {
  return (
    <>
      <Header className="header-container"/>
      <header className="header-container">
      <aside>
       <Subreddits />
      </aside>
      <main>
        <Home />
      </main>
      </header>
    </>
  );
}

export default App;
