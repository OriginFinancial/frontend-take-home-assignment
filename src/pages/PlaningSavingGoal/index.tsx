import * as React from 'react'

import insuranceIcon from '../../assets/icons/insurance.svg'
import {
  Title, 
  Container, ContainerHeader, ContainerHeaderTitle, HouseIcon, ContainerHeaderSubtitle
} from './styles'


import OriginHeader from '../../components/OriginHeader'

const PlaningSavingGoal = () => {
  return (
    <>
      <OriginHeader />

      <Title>Let's plan your <strong>saving goal.</strong></Title>
      
      <Container>
        <ContainerHeader>
          <HouseIcon src={ insuranceIcon } alt="House Icon" />

          <ContainerHeaderTitle>Buy a house</ContainerHeaderTitle>
          <ContainerHeaderSubtitle>Saving goal</ContainerHeaderSubtitle>
        </ContainerHeader>
      </Container> 
    </>
  )
}

export default PlaningSavingGoal