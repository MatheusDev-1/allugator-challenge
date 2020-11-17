import React, { useState } from 'react';
import api from '../../services/api';
import Upload from '../../components/Upload';
import GlobalModal from '../../components/Modal';
import '../../assets/funcionarios.csv';
import 'react-bulma-components/dist/react-bulma-components.min.css';

import Header from '../../components/Header';
import {
  Container,
  MainFrame,
  ButtonsFrame,
  InsertDataFormFrame,
} from './styles';

import DataTable from '../../components/DataTable';

const Workers: React.FC = () => {
  const [modal, setModal] = useState(false);

  const handleUpload = async (files: File[]): Promise<void> => {
    const data = new FormData();

    data.append('file', files[0], files[0].name);

    try {
      await api.post('/worker/import', data);
      await window.location.reload();
    } catch (err) {
      console.log(err.response.error);
    }
  };

  const submitFile = async (files: File[]): Promise<void> => {
    await handleUpload(files);
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
          <DataTable />
          <ButtonsFrame>
            <InsertDataFormFrame onClick={() => setModal(true)}>
              <h1>Adicionar funcionário</h1>
            </InsertDataFormFrame>
            <Upload onUpload={submitFile} />
          </ButtonsFrame>
        </MainFrame>
      </Container>
    </>
  );
};

export default Workers;
