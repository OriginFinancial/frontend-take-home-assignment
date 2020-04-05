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
  previousMonth: () => void;
  nextMonth: () => void;
  previousYear: () => void;
  nextYear: () => void;
  validateYear: () => void;
  pickedDate: (monthIndex: number) => number | void;
}

interface Event {
  key: string;
}

const DatePicker: React.FC<Props> = props => {
  const [picker, setPicker] = React.useState<boolean>(false);

  const pickDateHandler = (pickState: boolean) => {
    setPicker(pickState);
    props.validateYear();
  };

  const buttonHandler = (type: string) => {
    type === 'previous' ? props.previousMonth() : props.nextMonth();
  };

  const handleKeyPress = (event: Event) => {
    if (event.key === 'ArrowLeft') {
      buttonHandler('previous');
    }
    if (event.key === 'ArrowRight') {
      buttonHandler('next');
    }
  };

  const list = props.months.map((m, index) => (
    <li
      key={index}
      onClick={() => (props.pickedDate(index), pickDateHandler(false))}
      className={
        props.disableds.includes(m) && props.stateYear === props.currentYear
          ? 'disabled'
          : m === props.stateMonth
          ? 'current'
          : null
      }
    >
      <p>{m.substring(3, 0)}</p>
    </li>
  ));

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
          onKeyDown={handleKeyPress}
        >
          <img src={require('~/assets/icons/arrow.svg')} />
        </button>
        <button
          className="pickerDisplay"
          onClick={() => pickDateHandler(!picker)}
          onKeyDown={handleKeyPress}
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
          onKeyDown={handleKeyPress}
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
            <ul className="pickerMonths">{list}</ul>
          </div>
        ) : null}
      </span>
    </div>
  );
};

export default DatePicker;
