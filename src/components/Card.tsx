import * as React from 'react';
import styled from 'styled-components';

export interface Card extends React.FunctionComponent {
  Icon?: React.FunctionComponent;
  Title?: React.FunctionComponent;
  Subtitle?: React.FunctionComponent;
  Body?: React.FunctionComponent;
  BodySection?: React.FunctionComponent;
  Action?: React.FunctionComponent;
}

const Container = styled.section`
  align-items: flex-start;
  background: #fff;
  border-radius: 20px 20px 0 0;
  box-shadow: 0px 2px 16px rgba(225, 232, 237, 0.8);
  display: flex;
  flex-direction: column;
  max-width: 560px;
  padding: 24px;
  width: 100%;

  ${props => `
    ${props.theme.breakpoints.md} {
      border: 1px solid #e1e8ed;
      border-radius: 8px;
      box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);
      padding: 40px;
    }
  `}
`;

const Icon = styled.div`
  height: 32px;
  margin-bottom: 5px;
  width: 32px;

  ${props => `
    ${props.theme.breakpoints.md} {
      height: 40px;
      width: 40px;
    }
  `}
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;

  ${props => `
    ${props.theme.breakpoints.md} {
      font-size: 32px;
    }
  `}
`;

const Subtitle = styled.div`
  color: ${props => props.theme.fonts.secondaryColor};
  margin-top: 5px;
  font-size: 14px;
  font-weight: 400;

  ${props => `
    ${props.theme.breakpoints.md} {
      font-size: 16px;
    }
  `}
`;

const Body = styled.div`
  margin-top: 36px;
  width: 100%;

  ${props => `
    ${props.theme.breakpoints.md} {
      margin-top: 40px;
    }
  `}
`;

const BodySection = styled.div`
  &:not(:first-child) {
    margin-top: 30px;
  }
`;

const Action = styled(Body)`
  max-width: 400px;

  ${props => `
    ${props.theme.breakpoints.md} {
      margin: 36px auto 0;
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
Card.BodySection = BodySection;
Card.Action = Action;

export default Card;
