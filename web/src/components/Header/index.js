import React from 'react';

import { Container, WhiteBar } from './styles';

export default function Header() {
  return (
    <Container>
      <div className="header">
        <h1>EasySale</h1>
        <span>Hubster</span>
      </div>
      <WhiteBar />
    </Container>
  );
}
