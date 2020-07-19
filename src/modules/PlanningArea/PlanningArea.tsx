import * as React from 'react';
import styled from 'styled-components';
import { planningArea } from './PlanningArea.styles';
import { DepositInput, DateInput, ResultArea } from './components';

const PlanningAreaStyled = styled.main`
  ${planningArea};
`;

const PlanningArea = (): React.ReactElement => {
  const [deposit, setDeposit] = React.useState(25000);

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const [month, setMonth] = React.useState(currentMonth + 1);
  const [year, setYear] = React.useState(currentYear);

  return (
    <>
      <PlanningAreaStyled>
        <DepositInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDeposit(Number(e.target.value.replace(/\D/gi, '')))
          }
          value={deposit}
        />
        <DateInput
          value={year.toString()}
          month={month}
          year={year}
          setMonth={setMonth}
          setYear={setYear}
          blockPastDate={month === currentMonth + 1 && year <= currentYear}
        />
      </PlanningAreaStyled>
      <ResultArea month={month} year={year} deposit={deposit} />
    </>
  );
};

export { PlanningArea };
