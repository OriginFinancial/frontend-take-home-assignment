import styled from 'styled-components';
import { mediaQ } from './MediaQueries';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 24px;

  width: 360px;
  height: 657px;

  background: #ffffff;
  box-shadow: 0px 2px 16px rgba(225, 232, 237, 0.8);

  ${mediaQ.desktop} {
    padding: 40px;
    width: 560px;
    height: 600px;
  }
`;
