import * as React from 'react';
import { useHistory } from 'react-router-dom';
import {
  addMonths,
  differenceInCalendarMonths,
  getYear,
  format
} from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';

import api from '../../services/api';
import * as icon from '../../icons';
import { AmountInput, BackButton, Wrapper, Header, GoalCard } from './styles';

const startDate = new Date();
const minDate = addMonths(new Date(), 1);
const initialAmount = 25000;

const Saving = ({ id }: string) => {
  const history = useHistory();
  const [savingGoal, setSavingGoal] = React.useState({ name: '' });
  const [loading, setLoading] = React.useState(true);
  const [selectedDate, setSelectedDate] = React.useState(minDate);
  const [monthsDiff, setMonthsDiff] = React.useState(
    differenceInCalendarMonths(minDate, startDate)
  );
  const [totalAmount, setTotalAmount] = React.useState(initialAmount);
  const [monthlyAmount, setMonthlyAmount] = React.useState(initialAmount / 1);
  const [title, setTitle] = React.useState('');
  const [disableBackButton, setDisableBackButton] = React.useState(false);

  React.useEffect(() => {
    const loadData = async () => {
      const response = await api.get(`saving-goals/${id}`);
      setSavingGoal(response.data);
      let text = savingGoal.name.replace(/([A-Z])/g, ' $1').toLowerCase();
      text = text.charAt(0).toUpperCase() + text.slice(1);
      setTitle(text);
      setLoading(false);
    };
    loadData();
  }, [id, savingGoal.name]);

  function handleDate(date: Date | null) {
    setSelectedDate(date);
    setMonthsDiff(differenceInCalendarMonths(date, startDate));
    setMonthlyAmount(
      Math.ceil(totalAmount / differenceInCalendarMonths(date, startDate))
    );
  }

  function handleAmount(e: React.ChangeEvent<HTMLInputElement>): void {
    setTotalAmount(+e.target.value);
    setMonthlyAmount(
      Math.ceil(
        totalAmount / differenceInCalendarMonths(selectedDate, startDate)
      )
    );
  }

  function handleMonthChange(direction: number) {
    if (direction < 0 && selectedDate < addMonths(startDate, 2)) {
      setDisableBackButton(true);
    } else {
      setDisableBackButton(false);
      setSelectedDate(addMonths(selectedDate, direction));
      setMonthlyAmount(
        Math.ceil(
          totalAmount / differenceInCalendarMonths(selectedDate, startDate)
        )
      );
    }
  }

  function updateSavingGoal(e) {
    e.preventDefault();
    const newGoal = {
      goal: true,
      value: totalAmount,
      date: selectedDate
    };
    const response = api.patch(`saving-goals/${savingGoal.id}`, newGoal);
    history.push('/');
  }

  return (
    <Wrapper>
      <Header>
        <BackButton onClick={() => history.push('/')}>
          <img src={icon.arrow} />
        </BackButton>
        <p>
          Let&apos;s plan your <strong>saving goal</strong>.
        </p>
      </Header>
      {loading ? null : (
        <GoalCard.Paper>
          <GoalCard.Image src={icon[savingGoal.name]} alt={savingGoal.name} />
          <div>
            <GoalCard.Title>{title}</GoalCard.Title>
            <small>Saving goal</small>
          </div>
          <GoalCard.Form
            onKeyUp={e => handleAmount(e)}
            onSubmit={e => updateSavingGoal(e)}
          >
            <GoalCard.Field>
              <GoalCard.FieldLabel>Total amount</GoalCard.FieldLabel>
              <GoalCard.FieldBox>
                <span>$</span>
                <AmountInput
                  type="number"
                  value={totalAmount}
                  onChange={e => handleAmount(e)}
                  onFocus={e => e.target.select()}
                  min="0"
                />
              </GoalCard.FieldBox>
            </GoalCard.Field>
            <GoalCard.Field>
              <GoalCard.FieldLabel>Reach goal by</GoalCard.FieldLabel>
              <GoalCard.FieldBox>
                <GoalCard.BackButton
                  disabled={disableBackButton}
                  type="button"
                  onClick={() => handleMonthChange(-1)}
                >
                  <img src={icon.arrow} alt="back arrow" />
                </GoalCard.BackButton>
                <GoalCard.Content>
                  <strong>{format(selectedDate, 'MMMM')}</strong>
                  <small>{getYear(selectedDate)}</small>
                </GoalCard.Content>
                <GoalCard.ForwardButton
                  type="button"
                  onClick={() => handleMonthChange(1)}
                >
                  <img
                    src={icon.arrow}
                    alt="back arrow"
                    style={{ transform: 'rotate(180deg)' }}
                  />
                </GoalCard.ForwardButton>
                <GoalCard.Calendar
                  selected={selectedDate}
                  onChange={date => handleDate(date)}
                  dateFormat="MM/yyyy"
                  showMonthYearPicker
                  minDate={minDate}
                />
              </GoalCard.FieldBox>
            </GoalCard.Field>
            <GoalCard.MonthlyBox>
              <GoalCard.MonthlyAmount>
                <h5>Monthly amount</h5>
                <p>$ {monthlyAmount}</p>
              </GoalCard.MonthlyAmount>
              <GoalCard.Planning>
                <p>
                  You&apos;re planning{' '}
                  <strong>{monthsDiff} montly deposits</strong> to reach your{' '}
                  <strong>{totalAmount}</strong> goal by{' '}
                  <strong>
                    {format(selectedDate, 'MMMM')} {getYear(selectedDate)}
                  </strong>
                </p>
              </GoalCard.Planning>
            </GoalCard.MonthlyBox>
            <GoalCard.Button onClick={updateSavingGoal}>Finish</GoalCard.Button>
          </GoalCard.Form>
        </GoalCard.Paper>
      )}
    </Wrapper>
  );
};

export default Saving;
