import * as React from 'react';
import styled from 'styled-components';

export interface Card extends React.FunctionComponent {
  Icon?: React.FunctionComponent;
  Title?: React.FunctionComponent;
  Subtitle?: React.FunctionComponent;
  Body?: React.FunctionComponent;
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 600px;
  padding: 24px;
  background: #fff;
  box-shadow: 0px 2px 16px rgba(225, 232, 237, 0.8);

  ${props => `
    ${props.theme.breakpoints.md} {
      padding: 40px;
      border: 1px solid #e1e8ed;
      box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);
    }
  `}
`;

const Icon = styled.div`
  width: 32px;
  height: 32px;
  margin-bottom: 5px;

  ${props => `
    ${props.theme.breakpoints.md} {
      width: 40px;
      height: 40px;
    }
  `}
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 24px;

  ${props => `
    ${props.theme.breakpoints.md} {
      font-size: 32px;
    }
  `}
`;

const Subtitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #657786;
  margin-top: 5px;

  ${props => `
    ${props.theme.breakpoints.md} {
      font-size: 16px;
    }
  `}
`;

const Body = styled.div`
  margin-top: 36px;

  ${props => `
    ${props.theme.breakpoints.md} {
      margin-top: 40px;
    }
  `}
`;

const Card: Card = ({ children }) => {
  return <Container>{children}</Container>;
};

Card.Icon = Icon;
Card.Title = Title;
Card.Subtitle = Subtitle;
Card.Body = Body;

export default Card;
