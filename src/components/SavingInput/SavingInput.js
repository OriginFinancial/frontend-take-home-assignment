import React from 'react';
import Styled from 'styled-components';
import { func } from 'prop-types';
import { Typography } from '../Typography';
import { InputMonth, InputAmount } from '../Input';
import { mq } from '../utils/mediaQueries';

const propTypes = {
  setAmount: func.isRequired,
  setReach: func.isRequired
};

const Wrapper = Styled.div`
  display: flex;
  padding: 1em 0;
  ${mq({
    flexDirection: ['column', 'column', 'column', 'column', 'row']
  })}
`;

const Amount = Styled.div`
  ${mq({
    padding: ['1em 0', '1em 0', '1em 0', '1em 0', '0 1em']
  })}
`;

const Reach = Styled.div`
  ${mq({
    padding: ['1em 0', '1em 0', '1em 0', '1em 0', '0 1em']
  })}
`;

const SavingInput = ({ setAmount, setReach }) => {
  return (
    <Wrapper>
      <Amount>
        <Typography variant="title2">Total amount</Typography>
        <InputAmount data-testid="input-amount" setAmount={setAmount} />
      </Amount>
      <Reach>
        <Typography variant="title2">Reach goal by</Typography>
        <InputMonth
          data-testid="input-month"
          type="month"
          setReach={setReach}
        />
      </Reach>
    </Wrapper>
  );
};

SavingInput.propTypes = propTypes;

export { SavingInput };
