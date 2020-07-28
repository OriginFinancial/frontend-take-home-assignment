import styled from 'styled-components';
import { mediaQueries } from '../../../helpers/utils';

export const ButtonContainer = styled.button`
  width: 312px;
  height: 56px;
  background: #1b31a8;
  border-radius: 32px;
  border: 0;

  font-weight: 600;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;

  &:focus {
    outline: 1px solid #32afdc;
  }

  ${mediaQueries.desktop} {
    width: 400px;
    height: 56px;
  }
`;
