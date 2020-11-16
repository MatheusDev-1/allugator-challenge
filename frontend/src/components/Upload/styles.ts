import styled, { css, FlattenSimpleInterpolation, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }`;

interface UploadProps {
  isDragActive: boolean;
  isDragReject: boolean;
  refKey?: string;
  [key: string]: any;
  type?: 'error' | 'success' | 'default';
}

const dragActive = css`
  border-color: #12a454;
`;

const dragReject = css`
  border-color: #e83f5b;
`;

export const DropContainer = styled.div.attrs({
  className: 'dropzone',
})`
  border: 2px solid darkorange;
  width: 400px;
  border-radius: 10px;
  padding: 5px;
  transition: box-shadow 0.3s ease-in-out, height 0.5s ease;
  animation: ${fadeIn} 2s;
  cursor: pointer;

  &:hover{
    box-shadow: 0px 5px 10px rgba(230, 80, 0, 0.3);
  }

  ${(props: UploadProps): false | FlattenSimpleInterpolation =>
    props.isDragActive && dragActive}

  ${(props: UploadProps): false | FlattenSimpleInterpolation =>
    props.isDragReject && dragReject}
`;

const messageColors = {
  default: 'darkorange',
  error: '#e83f5b',
  success: '#12a454',
};

export const UploadMessage = styled.p`
  display: flex;
  font-size: 25px;
  line-height: 24px;
  padding: 10px;
  cursor: pointer;

  color: ${({ type }: UploadProps) => messageColors[type || 'default']};

  justify-content: center;
  align-items: center;
`;
