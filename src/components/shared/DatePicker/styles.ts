import styled from 'styled-components';

import arrowIcon from '../../../assets/icons/arrow.svg';
import { mediaQueries } from '../../../helpers/utils';

export const DateInputContainer = styled.div`
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

export const DateInputStyle = styled.div`
  display: flex;

  &:focus {
    outline: 1px solid #32afdc;
  }
`;

export const ArrowIcon = styled.button<{ direction: 'left' | 'right' }>`
  background-image: url(${arrowIcon});
  background-color: #f4f8fa;
  background-repeat: no-repeat;
  background-position: center;
  transform: ${props => `rotate(${props.direction === 'left' ? 0 : 180}deg)`};
  width: 48px;
  height: 56px;
  border: 1px solid #e1e8ed;
  box-sizing: border-box;
  border-radius: 4px 0px 0px 4px;

  font-size: 22px;
  line-height: 26px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #657786;
  cursor: pointer;
`;

export const InputContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 216px;
  height: 56px;
  background: #ffffff;
  border: 1px solid #e1e8ed;
  color: #1c1e1f;

  ${mediaQueries.desktop} {
    width: 136px;
  }
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
