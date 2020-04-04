import * as React from 'react';
import moment from 'moment';
import DatePicker from '../../components/UI/DatePicker/DatePicker';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import './savingGoalPlanSimulator.scss';

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
const currentYear = new Date().getFullYear(); // 2020
const currentMonth = new Date().toLocaleString('en-US', { month: 'long' }); // APRIL
const minMonthGoalPeriod = 1; // 1
const minStartingMonthIndex = months.indexOf(currentMonth) + minMonthGoalPeriod; // 4
const minStartingMonth = months[minStartingMonthIndex]; // may

const SavingGoalPlanSimulator: React.FC = () => {
  const [month, setMonth] = React.useState<string>(minStartingMonth);
  const [year, setYear] = React.useState<number>(currentYear);
  const [disabledMonths, setDisabledMonths] = React.useState<string[]>([]);
  const [deposits, setDeposits] = React.useState<number>(minMonthGoalPeriod);
  const [value, setValue] = React.useState<number>(0);
  const [installment, setInstallment] = React.useState<number>(0);

  React.useEffect(() => {
    setDisabledMonths(
      months.filter((e, index) => {
        if (index < months.indexOf(month)) {
          return e;
        }
      })
    );
  }, []); // sets disabled months

  React.useEffect(() => {
    setDeposits(
      moment([year, months.indexOf(month), 1]).diff(
        moment([currentYear, months.indexOf(currentMonth), 1]),
        'months',
        true
      )
    );
    setInstallment(value / deposits);
    return () => {
      setDeposits(minMonthGoalPeriod);
      setInstallment(0);
    };
  }, [month, year, value, deposits]);

  const addMonthHandler = (): void => {
    const currMonthIndex = months.indexOf(month);
    month === 'December'
      ? (setMonth('January'), setYear(year + 1))
      : setMonth(months[currMonthIndex + 1]);
  }; // pull next month

  const subtractMonthHandler = (): void => {
    const currMonthIndex = months.indexOf(month);
    month === minStartingMonth && year === currentYear
      ? null
      : month === 'January'
      ? (setMonth('December'), setYear(year - 1))
      : setMonth(months[currMonthIndex - 1]);
  }; // pull previous month

  const pickedDateHandler = (pickedMonth: number) => {
    const currMonthIndex = months.indexOf(currentMonth);
    pickedMonth <= currMonthIndex && year === currentYear
      ? null
      : setMonth(months[pickedMonth]);
  }; // set picked date by datepicker ul

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
          <Input
            valueSetter={e => setValue(e)}
            type="number"
            autofocus={true}
            initialValue={value}
          />
          <DatePicker
            months={months}
            stateMonth={month}
            stateYear={year}
            currentMonth={currentMonth}
            currentYear={currentYear}
            disableds={disabledMonths}
            minStart={minStartingMonth}
            subtractMonth={() => subtractMonthHandler()}
            addMonth={() => addMonthHandler()}
            previousYear={() =>
              setYear(year === currentYear ? currentYear : year - 1)
            }
            nextYear={() => setYear(year + 1)}
            validateYear={() =>
              months.indexOf(month) < minStartingMonthIndex &&
              year === currentYear
                ? setYear(year + 1)
                : null
            }
            pickedDate={pickedMonth => pickedDateHandler(pickedMonth)}
          />
        </div>
        {/* PLAN SUMMARY */}
        <div className="planSummary">
          <div className="row">
            <h5>Monthly amount</h5>
            <h1>
              $
              <strong>
                {new Intl.NumberFormat('en-US', {
                  useGrouping: true,
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                }).format(installment)}
              </strong>
            </h1>
          </div>
          <div className="row">
            {value === 0 || value === '' ? (
              <p style={{ margin: '0 auto', lineHeight: '2.4em' }}>
                <small>Insert total amount and choose a date.</small>
              </p>
            ) : (
              <p>
                <small>
                  You're planning <strong>{deposits} monthly deposits</strong>{' '}
                  to reach your{' '}
                  <strong>
                    $
                    {new Intl.NumberFormat('en-US', {
                      useGrouping: true,
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    }).format(value)}
                  </strong>{' '}
                  goal by
                  <strong>
                    {` ${month}`} {year}
                  </strong>
                  .
                </small>
              </p>
            )}
          </div>
        </div>
        {/* OBJECTIVE */}
        <Button />
      </div>
    </section>
  );
};

export default SavingGoalPlanSimulator;
