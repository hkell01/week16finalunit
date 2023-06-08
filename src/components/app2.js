// App.js (or your routing component)
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        {/* Define other routes for your application */}
      </div>
    </Router>
  );
};

export default App;
