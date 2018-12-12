import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import Storitve from './components/Storitve';
import Kontakt from './components/Kontakt';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/menu" component={Menu} />
        <Route exact path="/" component={Home} />
        <Route exact path="/o-nas" component={About} />
        <Route exact path="/storitve" component={Storitve} />
        <Route exact path="/kontakt" component={Kontakt} />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
