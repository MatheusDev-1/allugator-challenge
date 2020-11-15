import React from 'react';
import { Link } from 'react-router-dom';
import { Container, LogoContainer, NavContainer } from './styles';

const Header: React.FC = () => {
  const bracketsName = '{ionários}';
  const selectedPage = window.location.pathname.split('/')[1];

  return (
    <Container>
      <LogoContainer>
        <p className="highlight">Allugator | Func()</p>
        <p className="logo">{bracketsName}</p>
      </LogoContainer>
      <NavContainer>
        <Link className="nav selected" to="/">
          Inicio
        </Link>
        <Link className="nav" to="/workers">
          Lista de Funcionários
        </Link>
        <Link className="nav" to="/">
          Depoimentos
        </Link>
      </NavContainer>
    </Container>
  );
};

export default Header;
