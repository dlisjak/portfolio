import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Landing = styled.section`
  background-color: black !important;
  height: 50vh;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
`;

const Subtitle = styled.h3`
  color: white;
  text-align: center;
`;

const Naslov = styled.div`
  vertical-align: middle
  padding-top: 200px;
  display: block;
`;

class Header extends Component {
  render() {
    return (
      <Landing>
        <Naslov>
          <Title>Domen Lisjak</Title>
          <Subtitle>Web Development</Subtitle>
        </Naslov>
      </Landing>
    );
  }
}

export default Header;
