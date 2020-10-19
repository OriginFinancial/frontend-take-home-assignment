import * as React from 'react';
import styled from 'styled-components';

export interface PageComponent extends React.FunctionComponent {
  Title?: React.FunctionComponent;
  Body?: React.FunctionComponent;
}

const Container = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  color: ${props => props.theme.fonts.titleColor};
  font-size: 18px;
  font-weight: 400;
  margin-top: 23px;
  text-align: center;

  ${props => `
    ${props.theme.breakpoints.md} {
      font-size: 24px;
      margin-top: 54px;
    }
  `}
`;

const Body = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  width: 100%;

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
