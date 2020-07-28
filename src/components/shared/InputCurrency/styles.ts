import styled from 'styled-components';

import { mediaQueries } from '../../../helpers/utils';

export const AmountInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Label = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1c1e1f;
  margin-bottom: 4px;
`;

export const AmountInputStyle = styled.div`
  display: flex;
`;

export const Icon = styled.span`
  width: 56px;
  height: 56px;
  background: #f4f8fa;
  border: 1px solid #e1e8ed;
  box-sizing: border-box;
  border-radius: 4px 0px 0px 4px;

  font-size: 22px;
  line-height: 26px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #657786;
`;

export const InputStyle = styled.input`
  width: 257px;
  height: 56px;
  background: #ffffff;
  border: 1px solid #e1e8ed;
  box-sizing: border-box;

  padding-left: 16px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.166667px;
  color: #1c1e1f;

  &:focus {
    outline: 1px solid #32afdc;
  }

  ${mediaQueries.desktop} {
    width: 176px;
  }
`;
