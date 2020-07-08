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

type MonthChangeData = {
  elapsedMonths : string,
  currentDate : string
}

const PlaningSavingGoal = () => {
  const [currentAmount, setCurrentAmount] = React.useState('0,00')
  const [monthlyAmount, setMonthlyAmount] = React.useState('0,00')
  const [currentDate, setCurrentDate] = React.useState('')
  const [elapsedMonths, setElapsedMonths] = React.useState('')
  
  const handleMonthChange = (data: MonthChangeData) => 
  {
    setElapsedMonths(data.elapsedMonths)
    setCurrentDate(data.currentDate)
  }

  React.useEffect(() => 
  {
    const amountToNumber = Number(currentAmount.replace(/[^0-9\.]+/g,""));
    const elapsedMonthsToNumber = Number(elapsedMonths)

    if(amountToNumber <= 0 || elapsedMonthsToNumber <= 0){
      setMonthlyAmount('0,00')
      return
    }

    const _monthlyAmount = amountToNumber / elapsedMonthsToNumber
    setMonthlyAmount(_monthlyAmount.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}))
  },[currentAmount, currentDate])


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
            <MoneyInput onChange={setCurrentAmount} />
          </InputGroup>

          <InputGroup>
            <InputLabel>Reach goal by</InputLabel>
            <MonthlyDateInput onChangeMonth={handleMonthChange} />
          </InputGroup>
        </InputsContainer>

        <SavingCard>
          <CardHeaderContainer>
            <CardHeaderLabel>Monthly</CardHeaderLabel>
            <CardHeaderText>${monthlyAmount}</CardHeaderText>
          </CardHeaderContainer>

          <CardFooter>
            You’re planning <strong>{elapsedMonths} monthly deposits</strong> to reach your <strong>${currentAmount}</strong> goal by <strong>{currentDate}.</strong>
          </CardFooter>
        </SavingCard>

        <ConfirmButton>Confirm</ConfirmButton>

      </Container> 
    </>
  )
}

export default PlaningSavingGoal