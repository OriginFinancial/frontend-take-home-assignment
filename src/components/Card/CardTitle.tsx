import styled from 'styled-components';
import { media } from '../../styles/mediaQueries';

export default styled.h2`
  font-size: 2.4rem;
  line-height: 1.33;
  font-weight: 600;
  letter-spacing: -0.2;

  ${media.desktop} {
    font-size: 3.2rem;
    line-height: 1.25;
    letter-spacing: -0.26;
  }
`;
