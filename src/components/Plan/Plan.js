import React from 'react';
import dayjs from 'dayjs';
import { number, string } from 'prop-types';
import Styled from 'styled-components';
import { Typography } from '../Typography';

const propTypes = {
  amount: number.isRequired,
  reachDate: string.isRequired
};

const Wrapper = Styled.div`
  text-align: center;
  padding: 0.2em;
`;

const Plan = ({ amount, reachDate }) => {
  const formatedDate = dayjs(reachDate).format('MMMM YYYY');

  return (
    <>
      <Wrapper>
        <Typography variant="h2" color="blue">
          {`$ ${amount}`}
        </Typography>
      </Wrapper>

      <Wrapper>
        <Typography variant="subtitle1">reach your goal by</Typography>
        <Typography variant="body1">{formatedDate}</Typography>
      </Wrapper>
    </>
  );
};

Plan.propTypes = propTypes;

export { Plan };
