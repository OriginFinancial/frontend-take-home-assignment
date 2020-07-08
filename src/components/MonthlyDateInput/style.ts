import styled from 'styled-components'
import { device } from '../../GlobalStyle'

export const MonthDateInputContainer = styled.div`
  display: flex;
  min-height: 168px;
  margin-top: 8px;

  @media ${device.desktop} {
    min-height: 56px;
    min-width: 233px;
    margin-top: 2px;
  }
`

export const MonthDateInputIcon = styled.button`
  min-width: 144px;
  
  font-size: 60px;
  line-height: 144px;
  color: #657786;

  background-color : #E1E8ED;
  border: 1px solid #E1E8ED;
  border-radius: 12px 0px 0px 12px;

  &:last-of-type {
    border-radius: 0px 12px 12px 0px;
  }

  @media ${device.desktop} {
    min-width: 48px;

    font-size: 22px;
    line-height: 56px;
    border-radius: 4px 0px 0px 4px;

    &:last-of-type {
      border-radius: 0px 4px 4px 0px;
    }
  }
`

export const MonthDateInputElement = styled.div`
  width: 100%;
  padding: 12px;
  
  font-size: 42px;
  line-height: 60px;
  color: #1C1E1F;
  text-align: center;
  
  background-color: #FFFFFF;
  border: 3px solid #E1E8ED;
  box-sizing: border-box;

  p {
    font-size: 60px;
    font-weight: 600;
    line-height: 66px;
  }

  @media ${device.desktop} {
    padding: 5px;
    font-size: 16px;
    line-height: 20px;

    border: 1px solid #E1E8ED;

    p {
      font-size: 20px;
      line-height: 24px;
    }
  }
`