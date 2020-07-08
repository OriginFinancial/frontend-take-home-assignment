import * as React from 'react';
import styled from 'styled-components';
import { text } from '../../styles';
import { Button, DatePicker, GoalSummary, Paper, TextInput } from '..';
import HomeIcon from '../../icons/home.png';
import { SavingGoalFormProps } from '../../models';

const SavingGoalForm: React.FunctionComponent<SavingGoalFormProps> = ({
  data: {
    amount,
    selectedDate,
    isPrevButtonDisabled,
    totalOfMonths,
    monthlyAmount
  },
  actions: {
    handleInputChange,
    handlePressNextDate,
    handlePressPreviousDate,
    handlePressKeyboardArrows
  }
}) => {
  return (
    <Wrapper>
      <Paper>
        <Content>
          <Top>
            <TopHouseImage src={HomeIcon} />
            <TopTitle>Buy a house</TopTitle>
            <TopText>Saving goal</TopText>
          </Top>

          <Goal>
            <GoalTotal>
              <TextInput
                label="Total amount"
                value={amount}
                handleChange={handleInputChange}
              />
            </GoalTotal>

            <GoalDate>
              <GoalDateLabel>Reach goal by</GoalDateLabel>

              <DatePicker
                data={{
                  selectedDate,
                  isPrevButtonDisabled
                }}
                actions={{
                  handlePressNextDate,
                  handlePressPreviousDate,
                  handlePressKeyboardArrows
                }}
              />
            </GoalDate>
          </Goal>

          <GoalSummary
            data={{
              amount,
              selectedDate,
              totalOfMonths,
              monthlyAmount
            }}
          />
          <Button>Confirm</Button>
        </Content>
      </Paper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;

  ${props => props.theme.media.md} {
    width: 47.5rem;
  }
`;

const Content = styled.div`
  padding: 3.2rem 2.4rem;
`;

const TopHouseImage = styled.img`
  height: 3rem;
  width: auto;
`;

const TopTitle = styled.h2`
  margin: 0.4rem 0;
  font-size: 2.4rem;
  font-weight: 700;
  word-spacing: ${text.wordSpacing.title};
`;

const Goal = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 3.2rem;

  ${props => props.theme.media.md} {
    flex-direction: row;
  }
`;

const GoalTotal = styled.div`
  margin-bottom: 1.6rem;
  width: 100%;

  ${props => props.theme.media.md} {
    width: 50%;
    padding-right: 1.6rem;
    margin: 0;
  }
`;

const GoalDate = styled.div`
  width: 100%;

  ${props => props.theme.media.md} {
    width: 50%;
  }
`;

const GoalDateLabel = styled.b`
  display: inline-block;
  margin-bottom: 0.8rem;
`;

const Top = styled.div`
  margin-bottom: 3.2rem;
`;

const TopText = styled.small`
  color: ${props => props.theme.colors.text.light};
`;

export default SavingGoalForm;
