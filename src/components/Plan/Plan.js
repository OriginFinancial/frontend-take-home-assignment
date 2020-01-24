import React from 'react';
import dayjs from 'dayjs';
import { number, string } from 'prop-types';
import Styled from 'styled-components';
import { Typography } from '../Typography';
import { mq } from '../utils/mediaQueries';

const propTypes = {
  amount: number.isRequired,
  reachDate: string.isRequired
};

const Wrapper = Styled.div`
  text-align: center;
  ${mq({ minWidth: ['40px', '80px', '100px', '320px'] })}
`;

const Plan = ({ amount, reachDate, ...props }) => {
  const formatedDate = dayjs(reachDate).format('MMMM YYYY');

  return (
    <div {...props}>
      <Wrapper>
        <Typography data-testid="planned-amount" variant="h2" color="blue">
          {`$ ${amount}`}
        </Typography>
      </Wrapper>

      <Wrapper>
        <Typography variant="subtitle1">reach your goal by</Typography>
        <Typography data-testid="planned-reach-date" variant="body1">
          {formatedDate}
        </Typography>
      </Wrapper>
    </div>
  );
};

Plan.propTypes = propTypes;

export { Plan };
