import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { Table } from 'react-bulma-components';

import GlobalInput from '../Input';

import formatValue from '../../utils/formatValue';
import api from '../../services/api';
import {
  Container,
  FilterContainer,
  TableFrame,
  IconDelete,
  Loader,
  StyledTable,
} from './styles';

interface Worker {
  id: string;
  createdDate: string;
  role: string;
  cpf: string;
  name: string;
  uf: string;
  salary: number;
  status: string;
  created_at: Date;
  updated_at: Date;
}

const DataTable: React.FC = () => {
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLoadData = async (): Promise<Worker[]> => {
    const response = await api.get('/worker');
    setWorkers(response.data);
    return response.data;
  };

  const handleDeleteByCPF = async (cpf: string): Promise<void> => {
    await api.delete(`http://localhost:3333/worker/${cpf}`);
    // handleLoadData();
    setTimeout(() => handleLoadData(), 100);
  };

  useEffect(() => {
    const findWorkers = async (): Promise<Worker[]> => {
      setLoading(true);
      const response = await api.get('/worker');
      setWorkers(response.data);
      setTimeout(() => setLoading(false), 2000);
      return response.data;
    };

    findWorkers();
  }, []);

  return (
    <Container>
      <FilterContainer>
        <GlobalInput className="filter" placeholder="Nome" />
        <GlobalInput className="filter" placeholder="CPF" />
        <GlobalInput className="filter" placeholder="Cargo" />
        <GlobalInput className="small filter" placeholder="UF" />
        <GlobalInput className="filter" placeholder="Min. Salário" />
        <GlobalInput className="filter" placeholder="Max. Salário" />
        <GlobalInput className="small filter" placeholder="Status" />
        <GlobalInput className="filter" placeholder="Data" />
      </FilterContainer>
      <TableFrame loading={loading}>
        {loading ? (
          <Loader />
        ) : (
          <StyledTable className="table is-striped is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Cargo</th>
                <th>UF</th>
                <th>Salário</th>
                <th>Status</th>
                <th>Data de Cadastro</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {workers.map(worker => (
                <tr style={{ alignContent: 'center' }}>
                  <td>{worker.name}</td>
                  <td>{worker.cpf}</td>
                  <td>{worker.role}</td>
                  <td>{worker.uf}</td>
                  <td>{formatValue(Number(worker.salary))}</td>
                  <td>{worker.status}</td>
                  <td>{worker.createdDate}</td>
                  <td>
                    <IconDelete onClick={() => handleDeleteByCPF(worker.cpf)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        )}
      </TableFrame>
    </Container>
  );
};

export default DataTable;
