import React, { InputHTMLAttributes } from 'react';
import { Container, Input } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const GlobalInput: React.FC<InputProps> = ({ ...rest }) => {
  return (
    <Container>
      <Input {...rest} />
    </Container>
  );
};

export default GlobalInput;
