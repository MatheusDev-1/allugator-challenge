import React from 'react';
import Input from '../../components/Input';
import 'react-bulma-components/dist/react-bulma-components.min.css';

import Header from '../../components/Header';
import {
  Container,
  MainFrame,
  FormsFrame,
  InsertDataFormFrame,
} from './styles';

import DataTable from '../../components/DataTable';

const Workers: React.FC = () => {
  return (
    <Container className="headerContainer">
      <MainFrame className="panelContainer">
        <Header />

        <FormsFrame />
        <DataTable />
        <InsertDataFormFrame>
          <h1>Adicionar funcionário</h1>
        </InsertDataFormFrame>
      </MainFrame>
    </Container>
  );
};

export default Workers;
