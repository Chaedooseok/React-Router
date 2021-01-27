import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

const App = () => {
  return (
    <>
    <div>
      <ul>
        <li>
          <Link to ="/">홈</Link>
        </li>
        <li>
          <Link to ="/about">about</Link>
        </li>
      </ul>
    </div>
    <div>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/profiles/:username" component={Profile} />
    </div>
    </>
  );
};

export default App;