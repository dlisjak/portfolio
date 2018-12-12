import React, { Component, Fragment } from 'react';

import Header from './Home/Header';
import Clients from './Home/Clients';
import Portfolio from './Home/Portfolio';
import Motivation from './Home/Motivation';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="content">
          <Header />
          <Clients />
          <Portfolio />
          <Motivation />
        </div>
      </Fragment>
    );
  }
}

export default Home;
