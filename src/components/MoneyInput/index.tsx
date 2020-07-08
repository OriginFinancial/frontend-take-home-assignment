import * as React from 'react'
import { MoneyInputContainer, MoneyInputIcon, MoneyInputElement } from './style'

const MoneyInput = () => {
  return (
    <MoneyInputContainer>
      <MoneyInputIcon>$</MoneyInputIcon>
      <MoneyInputElement />
    </MoneyInputContainer>
  )
}

export default MoneyInput