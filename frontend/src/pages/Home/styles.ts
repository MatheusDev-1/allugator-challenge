import styled, { keyframes } from 'styled-components';

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
  margin-left: 20px;
`;

const fadeMovingLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }`;

export const InfoFrame = styled.div`
  display: flex;
  height: 700px;
  flex-direction: column;
  max-width: 500px;
  padding-top: 120px;
  padding-left: 45px;

  h1 {
    color: black;
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 30px;
    animation: ${fadeMovingLeft} 2s;
  }

  p {
    margin-top: 20px;
    color: #a0a0a0;
    font-weight: 100;
    animation: ${fadeMovingLeft} 2s;
  }
`;

export const AlligatorContainer = styled.div`
  display: flex;
  width: 1100px;
  height: 700px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  animation: ${fadeIn} 3s;

  img {
    width: 90%;
    height: 100%;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  animation: ${fadeIn} 3s;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 130px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.3);
  }

  span {
    color: #00b934;
    font-weight: bold;
    font-size: 48px;
    cursor: default;
  }

  b {
    color: black;
    font-weight: bold;
    font-size: 24px;
    cursor: default;
  }
`;
