import Styled from 'styled-components';

const Input = Styled.input`
  text-align: ${({ textAlign }) => textAlign || 'left'};
  cursor: pointer;
  margin-bottom: 0;
  width: 100%;
  border: 1px solid #e1e8ed;
  outline: none;
  font-size: 16px;
`;

export { Input };
