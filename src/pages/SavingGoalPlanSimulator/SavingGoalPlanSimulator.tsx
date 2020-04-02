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
  const [month, setMonth] = React.useState<string>(currentMonth);
  const [year, setYear] = React.useState<number>(currentYear);
  const [disabledMonths, setDisabledMonths] = React.useState<string[]>([]);

  React.useEffect(() => {
    // console.log(months.indexOf(month));
    setDisabledMonths(
      months.filter((e, index) => {
        if (index < months.indexOf(month)) {
          return e;
        }
      })
    );
  }, []);

  const addMonthHandler = (): void => {
    const currMonthIndex = months.indexOf(month);
    month === 'December'
      ? (setMonth('January'), setYear(year + 1))
      : setMonth(months[currMonthIndex + 1]);
  };

  const subtractMonthHandler = (): void => {
    const currMonthIndex = months.indexOf(month);
    month === currentMonth && year === currentYear
      ? null
      : month === 'January'
      ? (setMonth('December'), setYear(year - 1))
      : setMonth(months[currMonthIndex - 1]);
  };

  const pickedDateHandler = (pickedMonth: number) => {
    const currMonthIndex = months.indexOf(currentMonth);
    pickedMonth <= currMonthIndex && year === currentYear
      ? null
      : setMonth(months[pickedMonth]);
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
            stateMonth={month}
            stateYear={year}
            currentMonth={currentMonth}
            currentYear={currentYear}
            disableds={disabledMonths}
            subtractMonth={() => subtractMonthHandler()}
            addMonth={() => addMonthHandler()}
            previousYear={() =>
              setYear(year === currentYear ? currentYear : year - 1)
            }
            nextYear={() => setYear(year + 1)}
            pickedDate={pickedMonth => pickedDateHandler(pickedMonth)}
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
