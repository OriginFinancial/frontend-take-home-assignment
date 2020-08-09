import styled from 'styled-components';
import Button from '../../components/Button';
import CurrencyField from '../../components/CurrencyField';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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
`;

export const HomeIcon = styled.img`
  width: 37px;
  height: 37px;
`;

export const ContainerTitle = styled.h1`
  font-size: 32px;
  line-height: 48px;
`;

export const ContainerSubtitle = styled.span`
  font-size: 16px;
  line-height: 20px;
  color: #657786;
`;

export const SavingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  background: #ffffff;
  max-width: 600px;
  /* height: 500px; */
  border: 1px solid #e1e8ed;
  box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);
  border-radius: 8px;
  padding: 40 40px;

  /* TODO RESPONSIVENESS */
  @media (max-width: 376px) {
    width: 100%;
    max-width: 100%;
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
`;

export const InputsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;
`;

export const SCurrencyField = styled(CurrencyField)`
  margin-right: 17px;
`;

export const ConfirmButton = styled(Button)`
  align-self: center;
  width: 400px;
  margin: 9 40 0 40px;
`;
