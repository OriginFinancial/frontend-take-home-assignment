import * as React from 'react';
import DatePicker from '../../components/UI/DatePicker/DatePicker';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import './savingGoalPlanSimulator.scss';

const currentYear = new Date().getFullYear();
const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const SavingGoalPlanSimulator: React.FC = () => {
  const [month, setMonth] = React.useState(currentMonth);
  const [year, setYear] = React.useState(currentYear);

  const addMonthHandler = (): void => {
    const currMonth = months.indexOf(month);

    month === 'December'
      ? (setMonth('January'), setYear(year + 1))
      : setMonth(months[currMonth + 1]);

    console.log('next');
  };

  const subtractMonthHandler = (): void => {
    const currMonth = months.indexOf(month);

    if (month === currentMonth && year === currentYear) {
      console.log('s');
    } else if (month === 'January') {
      setMonth('December');
      setYear(year - 1);
    } else {
      setMonth(months[currMonth - 1]);
    }
    console.log('previous');
  };

  const pickedDateHandler = (pickedMonth: number): void => {
    const currMonthIndex = months.indexOf(month);

    if (pickedMonth <= currMonthIndex && year === currentYear) {
      setMonth(months[pickedMonth]);
    } else {
      setMonth(months[pickedMonth + 1]);
    }
  };

  return (
    <section className="savingGoalPlanSimulator">
      <h3>
        Let's plan your <strong>saving goal.</strong>
      </h3>
      {/* CALCULATOR */}
      <div className="goalPlanCalculator">
        <div className="heading column">
          <img src={require('~/assets/icons/house.svg')} alt="House" />
          <h2>Buy a house</h2>
          <p>Saving goal</p>
        </div>
        <div className="row">
          <Input />
          <DatePicker
            months={months}
            currentMonth={month}
            currentYear={year}
            subtractMonth={() => subtractMonthHandler()}
            addMonth={() => addMonthHandler()}
            previousYear={() =>
              setYear(year === currentYear ? currentYear : year - 1)
            }
            nextYear={() => setYear(year + 1)}
            pickedDate={(pickedMonth: number) => pickedDateHandler(pickedMonth)}
          />
        </div>
        {/* PLAN SUMMARY */}
        <div className="planSummary">
          <div className="row">
            <h5>Monthly amount</h5>
            <h1>
              $<strong>521</strong>
            </h1>
          </div>
          <div className="row">
            <p>
              <small>
                You're planning <strong>48 monthly deposits</strong> to reach
                your <strong>$25,000</strong> goal by
                <strong> October 2020</strong>.
              </small>
            </p>
          </div>
        </div>
        {/* OBJECTIVE */}
        <Button />
      </div>
    </section>
  );
};

export default SavingGoalPlanSimulator;
