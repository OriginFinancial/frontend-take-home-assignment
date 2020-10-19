import * as React from 'react';
import styled from 'styled-components';

export interface Alert extends React.FunctionComponent {
  Body?: React.FunctionComponent;
  Title?: React.FunctionComponent;
  Money?: React.FunctionComponent;
  Footer?: React.FunctionComponent;
}

const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  border: 1px solid #e1e8ed;
  box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  ${props => `
    ${props.theme.breakpoints.md} {
      font-size: 18px;
    }
  `}
`;

const Money = styled.div`
  color: ${props => props.theme.fonts.highlightColor};
  font-size: 26px;
  max-width: 50%;
  overflow: hidden;
  text-overflow: ellipsis;

  ${props => `
    ${props.theme.breakpoints.md} {
      font-size: 40px;
    }
  `}
`;

const Body = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;

  ${props => `
    ${props.theme.breakpoints.md} {
      padding: 34px 32px;
    }
  `}
`;

const Footer = styled.div`
  background: #f4f8fa;
  min-height: 60px;
  padding: 16px 32px;
  font-size: 12px;
`;

const Alert: Alert = ({ children }) => {
  return <Container>{children}</Container>;
};

Alert.Body = Body;
Alert.Title = Title;
Alert.Money = Money;
Alert.Footer = Footer;

export default Alert;
