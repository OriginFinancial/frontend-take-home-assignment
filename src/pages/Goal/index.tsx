import * as React from 'react';
import { addMonths, differenceInCalendarMonths } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { SavingGoal } from '../../store/ducks/savings/types';

import { AmountInput } from './styles';
import * as icon from '../../icons';

const initialGoal: SavingGoal = {
  userId: 1,
  name: 'buildAnEmergencyFund',
  goal: false,
  value: 0,
  date: '',
  id: 2
};

export default class Goal extends React.Component {
  state = {
    savingGoal: initialGoal,
    startDate: new Date(),
    selectedDate: new Date(),
    minDate: addMonths(new Date(), 1),
    monthsDiff: 0,
    totalAmount: 25000,
    months: 0,
    monthlyAmount: 0
  };

  handleChange = (date: Date | null) => {
    this.setState({ selectedDate: date });
  };

  handleValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ totalAmount: e.target.value });
  };

  render() {
    return (
      <>
        <div>
          <button onClick={() => window.location.replace('/')}>
            <img src={icon.arrow} />
          </button>
          <p>
            Let&apos;s plan your <strong>saving goal</strong>.
          </p>
        </div>
        <div>{initialGoal.name}</div>
        <div>
          <label>Total amount</label>
          <span>$</span>
          <AmountInput
            type="number"
            value={this.state.totalAmount}
            onChange={this.handleValue}
            onFocus={e => e.target.select()}
            min="0"
          />
          <label>Total amount</label>
          <img src={icon.arrow} alt="back arrow" />
          <DatePicker
            selected={this.state.selectedDate}
            onChange={date => this.handleChange(date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            minDate={this.state.minDate}
          />
          <img
            src={icon.arrow}
            alt="back arrow"
            style={{ transform: 'rotate(180deg)' }}
          />
        </div>
      </>
    );
  }
}
