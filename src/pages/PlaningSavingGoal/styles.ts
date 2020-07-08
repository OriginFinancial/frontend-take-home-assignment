import styled from 'styled-components'
import { device } from '../../GlobalStyle'

export const Title = styled.h1`
  margin : 69px auto;
  width : 100%;
  
  text-align: center;
  font-size : 48px;
  color : #1B31A8;

  strong {
    font-weight: 600;
  }

  @media ${device.desktop} {
    margin : 54px auto;
    font-size : 24px;
  }
`

export const Container = styled.div`
  overflow: auto;

  width: 100%;
  
  padding: 72px;
  padding: 75px;

  background-color: #FFFFFF;
  border: 1px solid #E1E8ED;
  box-shadow: 0px 2px 16px rgba(225, 232, 237, 0.8);
  border-radius: 32px 32px 0 0;

  @media ${device.desktop} {
    width: 38.88%;
    height: 68.18%;

    overflow: hidden;
    
    padding: 40px;
    margin: 40px auto 0px auto;
    
    box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);
    border-radius: 8px;
  }
`

export const ContainerHeader = styled.div``

export const HouseIcon = styled.img`
  width : 96px;
  height: 96px;

  @media ${device.desktop} {
    width: 40px;
    height: 40px;
  }
`

export const ContainerHeaderTitle = styled.h1`
  font-weight: 600;
  font-size: 72px;
  line-height: 96px;
  color: #1C1E1F;
  letter-spacing: -0.2;

  @media ${device.desktop} {
    font-size: 32px;
    line-height: 40px;
  }
`

export const ContainerHeaderSubtitle = styled.p`
  font-size: 42px;
  color: #657786;
  line-height: 60px;

  @media ${device.desktop} {
    font-size: 16px;
    line-height: 20px;
  }
`

export const InputsContainer = styled.div`
  margin-top: 102px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media ${device.desktop} {
    margin-top: 40px;
    flex-direction: row;
  }
`

export const InputGroup = styled.div`
  width: 100%;
  
  &:first-of-type {
    margin-bottom: 48px;
  }

  @media ${device.desktop} {
    &:first-of-type {
      margin-bottom: 0px;
      margin-right: 17px;
    }
  }
`

export const InputLabel = styled.label`
  font-size: 40px;
  font-weight: 600;
  color: #1C1E1F;
  line-height: 60px;

  @media ${device.desktop} {
    font-size: 16px;
    line-height : 20px;  
  }
`


export const SavingCard = styled.div`
  margin-top : 60px;
  height: 402px;

  background: #FFFFFF;
  border: 3px solid #E1E8ED;
  box-shadow: 0px 3px 12px rgba(150, 164, 176, 0.1);
  border-radius: 12px;

  @media ${device.desktop} {
    margin-top : 30px;
    height: 168px;

    border: 1px solid #E1E8ED;
    border-radius: 4px;
    box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);
  }
`

export const CardHeaderContainer = styled.div`
  padding : 0 72px;
  height: 192px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.desktop} {
    padding : 0 32px;
    height: 102px;
  }
`

export const CardHeaderLabel = styled.h2`
  font-weight: 600;
  font-size: 48px;
  line-height: 72px;
  color: #1C1E1F;

  @media ${device.desktop} {
    font-size: 18px;
    line-height: 24px;

    &:after {
      content: ' Amount'
    }
  }
`

export const CardHeaderText = styled.h1`
  font-weight: 500;
  font-size: 78px;
  line-height: 96px;
  letter-spacing: -0.2;
  color: #0079FF;

  @media ${device.desktop} {
    font-size: 40px;
    line-height: 32px;
  }
`

export const CardFooter = styled.div`
  padding : 48px;
  height: 210px;

  font-size: 34px;
  line-height: 48px;

  background-color: #F4F8FA;
  box-shadow: 0px 3px 12px rgba(150, 164, 176, 0.1);
  border-radius: 0 0 4px 4px;

  strong {
    font-weight: 600;
  }

  @media ${device.desktop} {
    padding : 16px 32px;
    height: 66px;
    font-size: 12px;
    line-height: 16px;

    box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);
  }
`

export const ConfirmButton = styled.button`
  width: 105%;
  height: 148px;
  margin: 90px -2.5%;
  

  border: none;
  background-color: #1B31A8;
  border-radius: 96px;
  font-weight: 600;
  
  font-size: 48px;
  line-height: 72px;
  text-align: center;
  color: #FFFFFF;

  @media ${device.desktop} {
    width: 70%;
    height: 56px;
    margin: 30px 15%;

    border-radius: 32px;

    font-size: 18px;
    line-height: 24px;
  }
`
