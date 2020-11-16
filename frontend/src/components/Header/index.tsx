import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, LogoContainer, NavContainer } from './styles';

const Header: React.FC = () => {
  const bracketsName = '{ionários}';

  return (
    <Container>
      <LogoContainer>
        <p className="highlight">Allugator | Func()</p>
        <p className="logo">{bracketsName}</p>
      </LogoContainer>
      <NavContainer>
        <Link
          style={
            useLocation().pathname === '/'
              ? { borderBottom: '2px solid #00b934' }
              : { borderBottom: '0px solid #bebebe' }
          }
          className="nav"
          to="/"
        >
          Inicio
        </Link>
        <Link
          style={
            useLocation().pathname === '/workers'
              ? { borderBottom: '2px solid #00b934' }
              : { borderBottom: '0px solid #bebebe' }
          }
          className="nav"
          to="/workers"
        >
          Lista de Funcionários
        </Link>
        <Link className="nav" to="/hire">
          Contratar Funcionário
        </Link>
      </NavContainer>
    </Container>
  );
};

export default Header;
