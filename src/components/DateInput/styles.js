import styled from 'styled-components';

export const DateField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 56px;
  min-width: 136px;
  flex-grow: 1;
  max-width: 100%;
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

export const FieldContainer = styled.div`
  display: flex;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 4px;
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

  :hover {
    cursor: pointer;
  }

  :disabled {
    cursor: no-drop;
  }
`;

export const LeftButton = styled(InputButton)`
  border-radius: 4px 0 0 4px;
`;

export const RightButton = styled(InputButton)`
  border-radius: 0 4px 4px 0;
`;
