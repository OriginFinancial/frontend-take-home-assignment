import styled from 'styled-components';
import { media } from '../../styles/mediaQueries';

export default styled.h3`
  font-size: 1.4rem;
  line-height: 1.42;
  color: #657786;

  ${media.desktop} {
    font-size: 1.6rem;
    line-height: 1.25;
  }
`;
