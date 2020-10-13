import * as React from 'react';
import styled from 'styled-components';

export interface Alert extends React.FunctionComponent {
  Body?: React.FunctionComponent;
  Footer?: React.FunctionComponent;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #e1e8ed;
  box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);
  border-radius: 4px;
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;

  ${props => `
    ${props.theme.breakpoints.md} {
      padding: 34px 32px;
    }
  `}
`;

const Footer = styled.div`
  background: #f4f8fa;
  padding: 16px 32px;
  font-size: 12px;
`;

const Alert: Alert = ({ children }) => {
  return <Container>{children}</Container>;
};

Alert.Body = Body;
Alert.Footer = Footer;

export default Alert;
