import React, { useState, useEffect } from 'react';

import GlobalInput from '../Input';

import formatValue from '../../utils/formatValue';
import api from '../../services/api';
import {
  Container,
  FilterContainer,
  TableFrame,
  IconDelete,
  IconSearch,
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
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [uf, setUf] = useState<string>('');
  const [minSalary, setMinSalary] = useState('');
  const [maxSalary, setMaxSalary] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const handleQueryString = async (): Promise<string> => {
    return `name=${name}&cpf=${cpf}&role=${role}&uf=${uf}&minSalary=${minSalary}&maxSalary=${maxSalary}&status=${status}&createdDate=${date}`;
  };

  const handleLoadData = async (): Promise<Worker[]> => {
    const response = await api.get(`/worker?${await handleQueryString()}`);
    setWorkers(response.data);
    return response.data;
  };

  const handleDeleteByCPF = async (cpfData: string): Promise<void> => {
    await api.delete(`/worker/${cpfData}`);
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
        <GlobalInput
          className="filter"
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <GlobalInput
          className="filter"
          placeholder="CPF"
          value={cpf}
          onChange={e => setCpf(e.target.value)}
        />
        <GlobalInput
          className="filter"
          placeholder="Cargo"
          value={role}
          onChange={e => setRole(e.target.value)}
        />
        <GlobalInput
          className="small filter"
          placeholder="UF"
          value={uf}
          onChange={e => setUf(e.target.value)}
        />
        <GlobalInput
          className="small filter"
          placeholder="Min. Salário"
          value={minSalary}
          onChange={e => setMinSalary(e.target.value)}
        />
        <GlobalInput
          className="small filter"
          placeholder="Max. Salário"
          value={maxSalary}
          onChange={e => setMaxSalary(e.target.value)}
        />
        <GlobalInput
          className="small filter"
          placeholder="Status"
          value={status}
          onChange={e => setStatus(e.target.value)}
        />
        <GlobalInput
          className="filter"
          placeholder="Data"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <IconSearch onClick={() => handleLoadData()} />
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
                <tr key={worker.id} style={{ alignContent: 'center' }}>
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
