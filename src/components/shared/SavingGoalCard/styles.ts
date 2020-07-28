import styled from 'styled-components';
import { mediaQueries } from '../../../helpers/utils';

export const SavingGoalCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 24px;

  width: 360px;
  height: 657px;

  background: #ffffff;
  box-shadow: 0px 2px 16px rgba(225, 232, 237, 0.8);

  ${mediaQueries.desktop} {
    padding: 40px;
    width: 560px;
    height: 600px;
  }
`;

export const InputFields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  height: 176px;

  ${mediaQueries.desktop} {
    flex-direction: row;
    width: 478px;
    height: 80px;
  }
`;

export const Result = styled.div`
  width: 312px;
  height: 134px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e1e8ed;
  border-radius: 4px;

  ${mediaQueries.desktop} {
    width: 480px;
    height: 168px;
  }
`;

export const MonthlyAmount = styled.div`
  width: 309px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 20px;
  background: #ffffff;
  h4 {
    font-weight: 500;
  }
  p {
    color: #0079ff;
    font-weight: 500;
    font-size: 26px;

    ${mediaQueries.desktop} {
      font-size: 40px;
    }
  }

  ${mediaQueries.desktop} {
    width: 477px;
    height: 102px;
  }
`;

export const SavingPlan = styled.p`
  width: 309px;
  height: 70px;
  padding: 16px;
  background: #f4f8fa;
  font-size: 12px;

  ${mediaQueries.desktop} {
    width: 477px;
    height: 66px;
    font-size: 16px;
  }
`;

export const ButtonPosition = styled.div`
  width: 100%;
  text-align: center;
`;
