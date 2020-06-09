import React from 'react';
import styled from 'styled-components';
import { mediaQ } from '../../ui/mediaQueries';

const ButtonStyle = styled.button`
  width: 312px;
  height: 56px;
  background: #1b31a8;
  border-radius: 32px;
  border: 0;

  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;

  ${mediaQ.desktop} {
    width: 400px;
    height: 56px;
  }
`;

interface Props {
  onClick?: null;
}

const Button: React.FC<Props> = () => <ButtonStyle>Confirm</ButtonStyle>;

export default Button;
