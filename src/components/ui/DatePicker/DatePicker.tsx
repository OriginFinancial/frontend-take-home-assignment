import * as React from 'react';
import './datePicker.scss';

interface Props {
  stateMonth: string;
  stateYear: number;
  currentMonth: string;
  currentYear: number;
  disableds: string[];
  months: string[];
  minStart: string;
  subtractMonth: () => void;
  addMonth: () => void;
  previousYear: () => void;
  nextYear: () => void;
  validateYear: () => void;
  pickedDate: (monthIndex: number) => number | void;
}

const DatePicker: React.FC<Props> = props => {
  const [picker, setPicker] = React.useState(false);

  const pickDateHandler = (pickState: boolean) => {
    setPicker(pickState);
    props.validateYear();
  };

  const buttonHandler = (type: string) => {
    type === 'previous' ? props.subtractMonth() : props.addMonth();
  };

  const handleKeyPress = (event: object) => {
    if (event.key === 'ArrowLeft') {
      buttonHandler('previous');
    }
    if (event.key === 'ArrowRight') {
      buttonHandler('next');
    }
  };

  return (
    <div className="datePicker">
      <label>Reach goal by</label>
      {/* DISPLAY */}
      <span className="innerHolder">
        <button
          className="back"
          disabled={
            props.currentYear === props.stateYear &&
            props.minStart === props.stateMonth
              ? true
              : false
          }
          onClick={() => buttonHandler('previous')}
          onKeyDown={() => handleKeyPress(event)}
        >
          <img src={require('~/assets/icons/arrow.svg')} />
        </button>
        <button
          className="pickerDisplay"
          onClick={() => pickDateHandler(!picker)}
          onKeyDown={() => handleKeyPress(event)}
        >
          <p>
            {props.stateMonth}
            <small>
              <br />
              {props.stateYear}
            </small>
          </p>
        </button>
        <button
          className="forward"
          onClick={() => buttonHandler('next')}
          onKeyDown={() => handleKeyPress(event)}
        >
          <img src={require('~/assets/icons/arrow.svg')} />
        </button>
        {/* PICKER */}
        {picker ? (
          <div className="picker" onMouseLeave={() => pickDateHandler(false)}>
            <div className="row">
              <button className="back" onClick={props.previousYear}>
                <img src={require('~/assets/icons/arrow.svg')} />
              </button>
              <button
                className="pickerDisplay"
                onClick={() => pickDateHandler(!picker)}
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
                  onClick={() => (
                    props.pickedDate(indx), pickDateHandler(false)
                  )}
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
