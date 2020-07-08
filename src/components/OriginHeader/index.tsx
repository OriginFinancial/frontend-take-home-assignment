import * as React from 'react'
import styled from 'styled-components'
import { device } from '../../GlobalStyle'

import logo from '../../assets/icons/logo.svg'

const Header = styled.nav`
  width: 100%;
  height: 168px;
  background-color: #FFFFFF;

  @media ${device.desktop} {
    height: 9%;
  }
`

const Logo = styled.img`
  width : 195px;
  height: 78px;
  margin: 39px 48px;

  @media ${device.desktop} {
    width: 95px;
    height: 38px;
    margin: 18px 37px;
  }
`

const OriginHeader = () => {
  return (
    <Header>
      <Logo src={ logo } alt='Origin Financial'/>
    </Header>
  )
}

export default OriginHeader