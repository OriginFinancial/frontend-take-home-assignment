import * as React from 'react'

import insuranceIcon from '../../assets/icons/insurance.svg'
import {
  Title, 
  Container, ContainerHeader, ContainerHeaderTitle, HouseIcon, ContainerHeaderSubtitle,
  InputsContainer, InputGroup, InputLabel,
  SavingCard, CardHeaderContainer, CardFooter, CardHeaderLabel, CardHeaderText,
  ConfirmButton
} from './styles'

import OriginHeader from '../../components/OriginHeader'
import MoneyInput from '../../components/MoneyInput'
import MonthlyDateInput from '../../components/MonthlyDateInput'

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

        <InputsContainer>
          <InputGroup>
            <InputLabel>Total amount</InputLabel>
            <MoneyInput />
          </InputGroup>

          <InputGroup>
            <InputLabel>Reach goal by</InputLabel>
            <MonthlyDateInput />
          </InputGroup>
        </InputsContainer>

        <SavingCard>
          <CardHeaderContainer>
            <CardHeaderLabel>Monthly</CardHeaderLabel>
            <CardHeaderText>$521</CardHeaderText>
          </CardHeaderContainer>

          <CardFooter>
            You’re planning <strong>18 monthly deposits</strong> to reach your <strong>$1250,00</strong> goal by <strong>December 2020.</strong>
          </CardFooter>
        </SavingCard>

        <ConfirmButton>Confirm</ConfirmButton>

      </Container> 
    </>
  )
}

export default PlaningSavingGoal