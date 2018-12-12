import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import Projekt from './Projekt';

const Projekti = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const Podnaslov = styled.h2`
  margin: auto;
  color: black;
  text-align: center;
`;

const Wrapper = styled.div`
  margin-top: 230px;
  padding-bottom: 20px;
`;

class Portfolio extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <Podnaslov>Projects</Podnaslov>
        </Wrapper>
        <Projekti>
          <Projekt />
        </Projekti>
      </div>
    );
  }
}

export default Portfolio;
