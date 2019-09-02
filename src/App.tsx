import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from './Home'
import { About } from './About'

// setup
// create routes
// change routes
// route params

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path='/' component={Home} />
      <Route path='/about' component={About} />
    </BrowserRouter>
  );
};

export default App;
