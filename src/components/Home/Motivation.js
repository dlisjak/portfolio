import React, { Fragment } from 'react';
import styled from 'styled-components';

const Slike = styled.div`
  display: flex;
  flex-direction: row;
`;

const Slika = styled.img`
  height: 100%;
  width: 33%;
`;

const Podnaslov = styled.h2`
  margin: auto;
  color: black;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 20px;
`;

export default function Motivation() {
  return (
    <Fragment>
      <Podnaslov>Principles</Podnaslov>
      <Slike>
        <Slika src="/images/motivation-1.png" />
        <Slika src="/images/motivation-2.png" />
        <Slika img src="/images/motivation-3.png" />
      </Slike>
    </Fragment>
  );
}
