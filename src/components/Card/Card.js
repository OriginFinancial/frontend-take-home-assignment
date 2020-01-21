import styled, { css } from 'styled-components';
import { mq } from '../utils/mediaQueries';

const cardStyle = css`
  background-color: #fff;
  border: 1px solid #aab8c2;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  ${mq({
    padding: [
      '1em 0.5em',
      '1.5em 1em',
      '2em 1.5em',
      '2.5em 2em',
      '3em 2em',
      '4em 2em'
    ]
  })}
`;

export { cardStyle };

const Card = styled.div`
  ${cardStyle};
`;

export { Card };
