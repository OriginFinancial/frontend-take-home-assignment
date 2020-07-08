import * as React from 'react'
import CurrencyInput from 'react-currency-input'

import styled from 'styled-components'
import { device } from '../../GlobalStyle'

type CustomCurrencyInputProps = {
  className : string,
  children: string,
  onChangeEvent: CallableFunction,
  value: string
}

const CustomCurrencyInput = (props: CustomCurrencyInputProps) => (
  <CurrencyInput className={props.className} onChangeEvent={props.onChangeEvent} value={props.value}>
    {props.children}
  </CurrencyInput>
);

export const MoneyInputContainer = styled.div`
  margin-top: 8px;
  display: flex;
  max-height: 168px;

  @media ${device.desktop} {
    margin-top: 2px;
    min-height: 56px;
  }
`

export const MoneyInputIcon = styled.span`
  min-width: 168px;
  
  font-size: 66px;
  color: #657786;

  text-align: center;
  line-height: 168px;
  
  background-color : #F4F8FA;
  border: 3px solid #E1E8ED;
  border-radius: 12px 0px 0px 12px;

  @media ${device.desktop} {
    min-width: 56px;
    line-height: 56px;
    font-size: 22px;

    border: 1px solid #E1E8ED;
    border-radius: 4px 0px 0px 4px;
  }
`

export const MoneyInputElement = styled(CustomCurrencyInput)`
  padding : 24px;
  width: 100%;

  font-size: 60px;
  font-weight: 600;
  color: #1C1E1F;

  background-color: #FFFFFF;
  border: 3px solid #E1E8ED;
  box-sizing: border-box;
  border-radius: 0px 12px 12px 0px;

  &::-webkit-inner-spin-button, 
  &::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
  }

  @media ${device.desktop} {
    padding : 16px;
    font-size: 20px;
    border: 1px solid #E1E8ED;
    border-radius: 0px 4px 4px 0px;
  }
`