import React from 'react';
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

const Home: React.FC = () => {
  return (
    <Container className="headerContainer">
      <MainFrame className="panelContainer">
        <Header />
        <Frame>
          <InfoFrame>
            <h1>O melhor lugar para se trabalhar</h1>
            <p>
              Com uma lista crescente de funcionários, a Allugator vem se
              destacando atualmente como o melhor local de trabalho.
            </p>
            <p>
              O propósito da empresa também é inovador e desperta curiosidade:
              alugar ao invés de comprar, poder economizar muito dinheiro e
              ainda ter as coisas que sempre sonhou
            </p>
            <CardsContainer>
              <Card>
                <span>125</span>
                <b>Funcionários</b>
              </Card>
              <Card>
                <span>27</span>
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
