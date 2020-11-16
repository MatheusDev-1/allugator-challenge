import styled, { keyframes } from 'styled-components';
import { Loader as Load, Table } from 'react-bulma-components';
import { TiDeleteOutline } from 'react-icons/ti';

interface loadingProps {
  loading?: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }`;

export const Container = styled.div``;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 60px;
  margin-left: 60px;
  background-color: #eeeeee;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

export const StyledTable = styled(Table)`
  animation: ${fadeIn} 0.3s ease-in-out;
`;

export const TableFrame = styled.div`
  display: flex;
  width: 95%;
  height: 400px;
  margin-left: 60px;
  margin-bottom: 20px;
  border: 1px solid;
  border-color: ${({ loading }: loadingProps): string =>
    loading ? 'transparent' : '#cecece'};
  overflow: auto;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`;

export const IconDelete = styled(TiDeleteOutline)`
  width: 30px;
  height: 30px;
  color: darkred;
  transition: color 0.2s ease-in;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

export const Loader = styled(Load)`
  width: 100px;
  height: 100px;
  margin-left: 570px;
  margin-top: 100px;
  border: 4px solid #cecece;
  border-top-color: transparent;
  border-right-color: transparent;
`;
