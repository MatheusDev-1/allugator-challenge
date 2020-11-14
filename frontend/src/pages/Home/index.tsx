import React from 'react';
import Header from '../../components/Header';
import { Container, Panel } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Panel className="panel">
        <Header />
      </Panel>
    </Container>
  );
};

export default Home;
