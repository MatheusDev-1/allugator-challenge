import styled, { keyframes } from 'styled-components';

interface ModalProps {
  modal: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.5s ease-in-out;

  opacity: ${({ modal }: ModalProps): number => (modal ? 0.3 : 1)};
`;

export const MainFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 1600px;
  max-width: 100%;
  height: 850px;
  background-color: #ffffff;
  border-radius: 25px;
`;

export const FormsFrame = styled.div`
  display: flex;
  width: 90%;
  height: 25%;
`;

export const InsertDataFormFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 100%;
  width: 60%;
  animation: ${fadeIn} 2s;

  h1 {
    padding: 10px;
    color: #00b934;
    font-size: 25px;
    font-weight: bold;
    transition: color 0.2s ease-in;
    border: 2px solid #00b934;
    border-radius: 15px;
    transition: box-shadow 0.2s ease-in;
    cursor: pointer;

    &:hover {
      color: #00b934;
      box-shadow: 0px 3px 10px rgba(0, 182, 52, 0.4);
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 45%;
`;

export const ButtonInsertForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  border: 1px solid #00b934;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0);
  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 3px 10px rgba(0, 182, 52, 0.4);
  }

  span {
    font-size: 25px;
    font-weight: bold;
    color: #00b934;
    cursor: pointer;
  }
`;

export const ButtonDeleteForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  border: 1px solid #9f1111;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0);

  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 3px 10px rgba(159, 17, 17, 0.4);
  }

  span {
    font-size: 25px;
    font-weight: bold;
    color: #9f1111;
    cursor: pointer;
  }
`;
