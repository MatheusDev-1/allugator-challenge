import styled, { keyframes } from 'styled-components';
import { TiDeleteOutline } from 'react-icons/ti';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }`;

interface validationProps {
  validation: boolean;
}

export const Container = styled.div``;

export const IconDelete = styled(TiDeleteOutline)`
  width: 30px;
  height: 30px;
  color: black;
  margin-left: 420px;
  cursor: pointer;
`;

export const Modal = styled.div`
  z-index: 1;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 680px;
  margin-top: 250px;
  width: 500px;
  height: 570px;
  background-color: white;
  border-radius: 15px;
  animation: ${fadeIn} 0.3s ease-in-out;

  h1 {
    font-size: 30px;
    font-weight: bold;
    color: black;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 70%;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  margin-top: 20px;
  border-radius: 10px;
  border: 1px solid;
  border-color: ${({ validation }: validationProps): string =>
    validation ? '#9f1111' : '#00b934'};
  transition: box-shadow 0.2s ease-in;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 3px 10px
      ${({ validation }: validationProps): string =>
        validation ? '#9f1111' : '#00b934'};
  }

  h1 {
    font-size: 25px;
    font-weight: bold;
    color: ${({ validation }: validationProps): string =>
      validation ? '#9f1111' : '#00b934'};
    cursor: pointer;
  }
`;
