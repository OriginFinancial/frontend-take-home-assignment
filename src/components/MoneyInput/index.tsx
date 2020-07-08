import * as React from 'react'
import { MoneyInputContainer, MoneyInputIcon, MoneyInputElement } from './style'

type MoneyInputProps = {
  onChange? : CallableFunction
}

const MoneyInput = (props : MoneyInputProps) => {
  const [totalAmount, setTotalAmount] = React.useState('0,00')

  const handleChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => 
  {
    const newValue = event.target.value
    setTotalAmount(newValue)
  }

  React.useEffect(() => 
  {
    if(props.onChange)
      props.onChange(totalAmount)
  }, [totalAmount])

  return (
    <MoneyInputContainer>
      <MoneyInputIcon>$</MoneyInputIcon>
      <MoneyInputElement onChangeEvent={handleChangeEvent} value={totalAmount} />
    </MoneyInputContainer>
  )
}

export default MoneyInput