import styled from 'styled-components';

import { mediaQueries } from '../../../helpers/utils';

export const PageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Paragraph = styled.p`
  text-align: center;
  margin: 32px;
  font-size: 18px;
  color: #1b31a8;

  ${mediaQueries.desktop} {
    font-size: 24px;
  }
`;
