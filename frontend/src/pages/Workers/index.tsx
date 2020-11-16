import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../../services/api';
import GlobalModal from '../../components/Modal';
import '../../assets/funcionarios.csv';
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
  const [upload, setUpload] = useState(false);

  const handleFileImport = async (): Promise<void> => {
    const data = new FormData();

    data.append('file', '../../assets/funcionarios.csv', 'funcionarios.csv');

    // await api.post('/worker/import', data);
    setUpload(true);
  };

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
          <InsertDataFormFrame onClick={() => handleFileImport()}>
            <h1>Carregar funcionários por listagem</h1>
          </InsertDataFormFrame>
        </MainFrame>
      </Container>
    </>
  );
};

export default Workers;
