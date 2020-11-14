import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  margin-top: 20px;
`;

export const LogoContainer = styled.div`
  min-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;

  p {
    color: black;
    font-family: 'Quattrocento Sans', sans-serif;
    font-size: 25px;
    font-weight: bold;
    cursor: pointer;
  }

  p.highlight {
    color: #00b934;
    font-family: 'Quattrocento Sans', sans-serif;
    font-size: 25px;
    font-weight: bold;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  width: 700px;
  justify-content: space-around;
  align-items: center;
  padding: 30px;

  a.nav {
    padding: 5px;
    color: #b6b6b6;
    font-family: 'Quattrocento Sans', sans-serif;
    font-size: 18px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s color ease-in-out;
  }

  a.nav.selected {
    color: #6b6a6a;
    font-weight: bold;
    border-bottom: 2px solid #00b934;
  }

  a.nav:hover {
    color: #00b934;
  }
`;
