import * as React from 'react'
import { MonthDateInputContainer, MonthDateInputIcon, MonthDateInputElement} from './style'

const MonthlyDateInput = () => {
  return (
    <MonthDateInputContainer>
      <MonthDateInputIcon> {"<"} </MonthDateInputIcon>
      
      <MonthDateInputElement>
        <p> October </p>
        2020
      </MonthDateInputElement>

      <MonthDateInputIcon> {">"} </MonthDateInputIcon>
    </MonthDateInputContainer>
  )
}

export default MonthlyDateInput