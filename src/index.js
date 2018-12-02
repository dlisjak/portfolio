import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={Header} />
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
