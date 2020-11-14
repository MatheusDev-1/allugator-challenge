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
  margin-left: 20px;
`;

export const InfoFrame = styled.div`
  display: flex;
  height: 700px;
  flex-direction: column;
  max-width: 500px;
  padding-top: 120px;
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
  margin-left: 10px;

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
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 130px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);

  span {
    color: #00b934;
    font-weight: bold;
    font-size: 48px;
  }

  b {
    color: black;
    font-weight: bold;
    font-size: 24px;
  }
`;
