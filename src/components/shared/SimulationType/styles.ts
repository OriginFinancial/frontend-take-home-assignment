import styled from 'styled-components';
import { mediaQueries } from '../../../helpers/utils';

export const TypeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Icon = styled.img`
  width: 32px;
  height: 32px;

  ${mediaQueries.desktop} {
    width: 40px;
    height: 40px;
  }
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 24px;
  color: #1c1e1f;

  ${mediaQueries.desktop} {
    font-size: 32px;
  }
`;

export const Subtitle = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #657786;

  ${mediaQueries.desktop} {
    font-size: 16px;
    line-height: 20px;
  }
`;
