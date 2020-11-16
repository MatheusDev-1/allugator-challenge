import styled from 'styled-components';

export const Container = styled.div``;

export const Input = styled.input`
  width: 170px;
  height: 44px;
  margin-right: 5px;
  margin-left: 5px;
  padding-left: 10px;
  background: transparent;
  border: 1px solid #cecece;
  color: black;
  font-family: 'Quattrocento Sans', sans-serif;
  font-size: 18px;
  transition: border 0.2s ease-in-out;

  &.large {
    width: 300px;
  }

  &.small {
    width: 100px;
  }

  &.filter {
    color: #aeaeae;
  }

  &.filter:focus {
    border-color: darkgrey;
  }

  &:focus {
    border-color: black;
  }

  &::placeholder {
    color: #cecece;
  }
`;
