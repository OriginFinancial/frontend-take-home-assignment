import styled from 'styled-components';
import CurrencyField from '../../components/CurrencyField';
import DateInput from '../../components/DateInput';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (max-width: 376px) {
    justify-content: flex-start;
    padding-top: 23px;
  }
`;

export const Header = styled.span`
  height: 32px;
  top: 134px;
  font-size: 24px;
  line-height: 32px;

  text-align: center;
  letter-spacing: -0.2px;
  margin-bottom: 40px;

  color: #1b31a8;

  @media (max-width: 376px) {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

export const HomeIcon = styled.img`
  width: 37px;
  height: 37px;
`;

export const ContainerTitle = styled.h1`
  font-size: 32px;
  line-height: 48px;
`;

ContainerTitle.displayName = "ContainerTitle";

export const ContainerSubtitle = styled.span`
  font-size: 16px;
  line-height: 20px;
  color: #657786;
`;

export const SavingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  max-width: 600px;
  border: 1px solid #e1e8ed;
  box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);
  border-radius: 8px;
  padding: 40 40px;

  @media (max-width: 376px) {
    max-width: 100%;
    padding: 24px 24px;
  }
`;

export const ResultContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  height: 168px;
  max-width: 480px;
  margin: 31 0 10 0px;
  border: 1px solid #e1e8ed;
  box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);
  border-radius: 4px;
`;

export const ResultMessage = styled.div`
  justify-self: flex-end;
  background-color: #f4f8fa;
  padding: 18 32px;
  font-size: 12px;
`;

export const MonthlyAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  margin-left: 32.4px;
  margin-right: 31.8px;
`;

export const Amount = styled.span`
  color: #0079ff;
  font-weight: 500;
  font-size: 40px;
  line-height: 32px;

  @media (max-width: 376px) {
    font-size: 26px;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;

  @media (max-width: 376px) {
    flex-direction: column;
  }
`;

export const SCurrencyField = styled(CurrencyField)`
  margin-right: 17px;

  @media (max-width: 376px) {
    width: 100%;
    margin-bottom: 16px;
    margin-right: 0px;
  }
`;

export const SDateField = styled(DateInput)`
  @media (max-width: 376px) {
    width: 100%;
    margin-bottom: 16px;
  }
`;

export const ConfirmButton = styled.button`
  background-color: #1b31a8;
  color: white;
  height: 56px;
  border-radius: 32px;
  border: none;
  max-width: 400px;
  font-weight: 600;
  align-self: center;
  width: 400px;
  margin: 9 40 0 40px;
  @media (max-width: 376px) {
    width: 100%;
    margin: 25px 0 36px 0;
  }
`;

ConfirmButton.displayName = "ConfirmButton";
