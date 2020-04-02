import * as React from 'react';
import './datePicker.scss';

interface Props {
  stateMonth: string;
  stateYear: number;
  currentMonth: string;
  currentYear: number;
  disableds: string[];
  months: string[];
  subtractMonth: () => void;
  addMonth: () => void;
  previousYear?: () => void;
  nextYear?: () => void;
  pickedDate: (monthIndex: number) => number | void;
}

const DatePicker: React.FC<Props> = props => {
  const [picker, setPicker] = React.useState(false);

  const pickDateHandler = (monthIndex: number) => {
    setPicker(false);
    props.pickedDate(monthIndex);
  };

  const buttonHandler = (type: string) => {
    type === 'previous' ? props.subtractMonth() : props.addMonth();
  };

  return (
    <div className="datePicker" onFocus={() => setPicker(true)}>
      <label>Reach goal by</label>
      {/* DISPLAY */}
      <span className="innerHolder">
        <button className="back" onClick={() => buttonHandler('previous')}>
          <img src={require('~/assets/icons/arrow.svg')} />
        </button>
        <button className="pickerDisplay" onClick={() => setPicker(!picker)}>
          <p>
            {props.stateMonth}
            <small>
              <br />
              {props.stateYear}
            </small>
          </p>
        </button>
        <button className="forward" onClick={() => buttonHandler('next')}>
          <img src={require('~/assets/icons/arrow.svg')} />
        </button>
        {/* PICKER */}
        {picker ? (
          <div className="picker" onMouseLeave={() => setPicker(false)}>
            <div className="row">
              <button className="back" onClick={props.previousYear}>
                <img src={require('~/assets/icons/arrow.svg')} />
              </button>
              <button
                className="pickerDisplay"
                onClick={() => setPicker(!picker)}
              >
                <p> {props.stateYear} </p>
              </button>
              <button className="forward" onClick={props.nextYear}>
                <img src={require('~/assets/icons/arrow.svg')} />
              </button>
            </div>
            <ul className="pickerMonths">
              {props.months.map((m, indx) => (
                <li
                  key={indx}
                  onClick={() => (props.pickedDate(indx), setPicker(false))}
                  className={
                    props.disableds.includes(m) &&
                    props.stateYear === props.currentYear
                      ? 'disabled'
                      : m === props.stateMonth
                      ? 'current'
                      : null
                  }
                >
                  <p>{m.substring(3, 0)}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </span>
    </div>
  );
};

export default DatePicker;
