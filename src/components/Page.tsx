import * as React from 'react';
import styled from 'styled-components';

export interface PageComponent extends React.FunctionComponent {
  Title?: React.FunctionComponent;
  Body?: React.FunctionComponent;
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  margin-top: 23px;
  color: #1b31a8;

  ${props => `
    ${props.theme.breakpoints.md} {
      margin-top: 54px;
      font-size: 24px;
    }
  `}
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 24px;

  ${props => `
    ${props.theme.breakpoints.md} {
      margin-top: 40px;
    }
  `}
`;

const Page: PageComponent = ({ children }) => {
  return <Container>{children}</Container>;
};

Page.Title = Title;
Page.Body = Body;

export default Page;
