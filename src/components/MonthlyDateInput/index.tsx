import * as React from 'react'
import { MonthDateInputContainer, MonthDateInputIcon, MonthDateInputElement} from './style'

type MonthlyDateInputProps = {
  onChangeMonth? : CallableFunction
}

const MonthlyDateInput = (props: MonthlyDateInputProps) => {
  const [currentDate, setCurrentDate] = React.useState<Date>(new Date())
  const [currentMonth, setCurrentMonth] = React.useState('')
  const [currentYear, setCurrentYear] = React.useState('')

  const handleNextMonth = () => 
  {
    const nextMonthDate = new Date(currentDate.getTime())
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1)
    
    setCurrentDate(nextMonthDate)
  }

  const handlePreviousMonth = () => 
  {
    const now = new Date()

    const previousMonthDate = new Date(currentDate.getTime())
    previousMonthDate.setMonth(previousMonthDate.getMonth() - 1)

    if(previousMonthDate <= now) return
    setCurrentDate(previousMonthDate)
  }

  const handleKeyDown = (evt: React.KeyboardEvent) =>
  {
    const key = evt.key

    if(key === 'ArrowLeft')
      handlePreviousMonth()
    else if (key === 'ArrowRight')
      handleNextMonth()
  }

  const setMonthAndYear = () =>
  {
    if(!currentDate) return

    setCurrentMonth(currentDate.toLocaleDateString('en-US', { month: 'long' }))
    setCurrentYear(currentDate.toLocaleDateString('en-US', { year: 'numeric' }))
  }

  const getElapsedMonths = () =>
  {
    const now = new Date()
    const elaspedTime = new Date(currentDate.getTime() - now.getTime())

    return (currentDate.getFullYear() - now.getFullYear())*12 + (currentDate.getMonth() - now.getMonth())
  }

  React.useEffect(() => 
  {
    handleNextMonth()
    setMonthAndYear()
  }, [])

  React.useEffect(() => 
  {
    setMonthAndYear()
  }, [currentDate])

  React.useEffect(() => 
  {
    const data = {
      elapsedMonths : getElapsedMonths(),
      currentDate : currentMonth + ' ' +  currentYear
    } 

    if(props.onChangeMonth)
      props.onChangeMonth(data)
  }, [currentMonth, currentYear])

  return (
    <MonthDateInputContainer>
      <MonthDateInputIcon onClick={handlePreviousMonth} > {"<"} </MonthDateInputIcon>
      
      <MonthDateInputElement tabIndex={0} onKeyDown={handleKeyDown}>
        <p> {currentMonth} </p>
        {currentYear}
      </MonthDateInputElement>

      <MonthDateInputIcon onClick={handleNextMonth} > {">"} </MonthDateInputIcon>
    </MonthDateInputContainer>
  )
}

export default MonthlyDateInput