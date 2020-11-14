import React from 'react';
import { Link } from 'react-router-dom';
import { Container, LogoContainer, NavContainer } from './styles';

const Header: React.FC = () => {
  const logoName = '{ionarios}';

  return (
    <Container>
      <LogoContainer>
        <p className="highlight">Allugator | Func()</p>
        <p className="logo">{logoName}</p>
      </LogoContainer>
      <NavContainer>
        <Link className="nav selected" to="/">
          Inicio
        </Link>
        <Link className="nav" to="/">
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
