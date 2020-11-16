import React, { useState } from 'react';

import GlobalModal from '../../components/Modal';
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
  const [modal, setModal] = useState(false);

  const handleCloseModal = async (): Promise<void> => {
    setModal(false);
  };

  return (
    <>
      {modal && <GlobalModal closeModal={handleCloseModal} />}
      <Container modal={modal} className="headerContainer">
        <MainFrame className="panelContainer">
          <Header />

          <FormsFrame />
          <DataTable />
          <InsertDataFormFrame onClick={() => setModal(true)}>
            <h1>Adicionar funcionário</h1>
          </InsertDataFormFrame>
        </MainFrame>
      </Container>
    </>
  );
};

export default Workers;
