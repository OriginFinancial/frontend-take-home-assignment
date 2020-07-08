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