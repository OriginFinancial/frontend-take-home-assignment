import * as React from 'react';
import { Container, Header } from '..';
import { ChildrenProps } from '../../models';

const Layout: React.FunctionComponent<ChildrenProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
