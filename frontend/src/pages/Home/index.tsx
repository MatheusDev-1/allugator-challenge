import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Header from '../../components/Header';
import alligator from '../../assets/alligator.png';
import {
  Container,
  MainFrame,
  Frame,
  InfoFrame,
  AlligatorContainer,
  CardsContainer,
  Card,
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

interface UF {
  UF: string;
  quantity: number;
}

const Home: React.FC = () => {
  const [workersQuantity, setWorkersQuantity] = useState<Worker[]>([]);
  const [ufQuantity, setUfQuantity] = useState<UF[]>([]);

  useEffect(() => {
    const findWorkersQuantity = async (): Promise<string> => {
      const response = await api.get('/worker?status=ATIVO');
      setWorkersQuantity(response.data.length);

      return response.data.length;
    };

    const findUfQuantity = async (): Promise<string> => {
      const response = await api.get('/worker/groupedByUf');
      setUfQuantity(response.data.length);

      return response.data.length;
    };

    findWorkersQuantity();
    findUfQuantity();
  }, []);

  return (
    <Container className="headerContainer">
      <MainFrame className="panelContainer">
        <Header />
        <Frame>
          <InfoFrame>
            <h1>O melhor lugar para se trabalhar</h1>
            <p>
              Com uma lista crescente de funcionários, a{' '}
              <strong>Allugator</strong> vem se destacando atualmente como o
              melhor local para se trabalhar.
            </p>
            <p>
              O propósito da empresa também é inovador e desperta curiosidade:
              <strong>alugar</strong> ao invés de comprar, fazer um assinatura
              de produtos poder economizar muito dinheiro, tendo as coisas que
              sempre sonhou
            </p>
            <CardsContainer>
              <Card>
                <span>{workersQuantity}</span>
                <b>Funcionários</b>
              </Card>
              <Card>
                <span>{ufQuantity}</span>
                <b>Estados</b>
              </Card>
            </CardsContainer>
          </InfoFrame>
          <AlligatorContainer>
            <img alt="bigAlligator" src={alligator} />
          </AlligatorContainer>
        </Frame>
      </MainFrame>
    </Container>
  );
};

export default Home;
