import styled from 'styled-components';

export const DateField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 56px;
  width: 136px;
  background: #ffffff;
  border: 1px solid #e1e8ed;
  box-sizing: border-box;
  border-left: none;
  border-right: none;
`;

export const Month = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;

export const Year = styled.span`
  font-size: 16px;
  line-height: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const InputButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 56px;
  background-color: #e1e8ed;
  border: 1px solid #e1e8ed;
  font-size: 22px;
  line-height: 26px;
  color: #657786;
`;

export const LeftButton = styled(InputButton)`
  border-radius: 4px 0 0 4px;
`;

export const RightButton = styled(InputButton)`
  border-radius: 0 4px 4px 0;
`;
