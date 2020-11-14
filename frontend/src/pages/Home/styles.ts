import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainFrame = styled.div`
  width: 1600px;
  max-width: 100%;
  height: 850px;
  background-color: #ffffff;
  border-radius: 25px;
`;

export const Frame = styled.div`
  display: flex;
  min-height: 700px;
`;

export const InfoFrame = styled.div`
  display: flex;
  height: 700px;
  flex-direction: column;
  max-width: 500px;
  padding-top: 150px;
  padding-left: 45px;

  h1 {
    color: black;
    font-family: 'Quattrocento Sans', sans-serif;
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  p {
    margin-top: 20px;
    color: #a0a0a0;
    font-weight: 100;
  }
`;

export const AlligatorContainer = styled.div`
  display: flex;
  width: 1100px;
  height: 700px;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }
`;
