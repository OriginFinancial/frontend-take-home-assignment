import styled from 'styled-components';
import { mediaQ } from './MediaQueries';

export default styled.button`
  width: 312px;
  height: 56px;
  background: #1b31a8;
  border-radius: 32px;
  border: 0;

  font-weight: 600;
  font-size: 18px;
  color: #ffffff;

  ${mediaQ.desktop} {
    width: 400px;
    height: 56px;
  }
`;
