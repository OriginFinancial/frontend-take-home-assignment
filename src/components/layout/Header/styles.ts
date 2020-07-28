import styled from 'styled-components';
import { mediaQueries } from '../../../helpers/utils';

export const HeaderStyle = styled.div`
  display: flex;
  background: #fff;
  height: 56px;
  width: 100vw;
`;

export const LogoStyle = styled.img`
  width: 65px;
  margin-left: 20px;

  ${mediaQueries.desktop} {
    width: 95px;
  }
`;
