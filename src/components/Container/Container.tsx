import * as React from 'react';
import styled from 'styled-components';
import { media } from '../../styles';
import { ChildrenProps } from '../../models';

const Container: React.FunctionComponent<ChildrenProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;

  ${media.lg} {
    padding: 0 0.8rem;
    width: 80%;
  }

  ${media.xl} {
    width: 40%;
  }
`;

export default Container;
