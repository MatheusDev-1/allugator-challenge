import React, { useState } from 'react';
import * as Yup from 'yup';
import api from '../../services/api';
import Input from '../Input';
import { Container, Modal, InputContainer, Button, IconDelete } from './styles';

interface ModalProps {
  closeModal: () => void;
}

const GlobalModal: React.FC<ModalProps> = ({ closeModal }: ModalProps) => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [role, setRole] = useState('');
  const [uf, setUf] = useState('');
  const [salary, setSalary] = useState('');
  const [validation, setValidationError] = useState(false);

  const handleAddWorker = async (): Promise<void> => {
    const parsedSalary = Number(salary);
    const data = { name, cpf, role, uf, salary: parsedSalary };

    const schema = Yup.object().shape({
      name: Yup.string().required('É obrigatório preencher o Nome'),
      cpf: Yup.string().required('É obrigatório preencher o CPF'),
    });

    try {
      await schema.validate(data, { abortEarly: false });
      api.post('/worker', data);
      closeModal();
    } catch (err) {
      setValidationError(true);
    }
  };

  return (
    <Container>
      <Modal>
        <IconDelete onClick={() => closeModal()} />
        <h1>Adicionar Funcionário</h1>
        <InputContainer>
          <Input
            className="large"
            placeholder="Nome"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input
            className="large"
            placeholder="CPF"
            value={cpf}
            onChange={e => setCpf(e.target.value)}
          />
          <Input
            className="large"
            placeholder="Cargo"
            value={role}
            onChange={e => setRole(e.target.value)}
          />
          <Input
            className="large"
            placeholder="UF"
            value={uf}
            onChange={e => setUf(e.target.value)}
          />
          <Input
            className="large"
            placeholder="Salário"
            value={salary}
            onChange={e => setSalary(e.target.value)}
          />
        </InputContainer>
        <Button validation={validation} onClick={() => handleAddWorker()}>
          <h1>Adicionar</h1>
        </Button>
      </Modal>
    </Container>
  );
};

export default GlobalModal;
