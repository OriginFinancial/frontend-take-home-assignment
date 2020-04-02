import * as React from 'react';
import './datePicker.scss';

const DatePicker: React.FC = props => {
  const [picker, setPicker] = React.useState(false);

  return (
    <label className="datePicker">
      Reach goal by
      {/* DISPLAY */}
      <span className="innerHolder">
        <button className="back" onClick={props.subtractMonth}>
          <img src={require('~/assets/icons/arrow.svg')} />
        </button>
        <button className="pickerDisplay" onClick={() => setPicker(!picker)}>
          <p>
            {props.currentMonth}
            <small>
              <br />
              {props.currentYear}
            </small>
          </p>
        </button>
        <button className="forward" onClick={props.addMonth}>
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
                <p> {props.currentYear} </p>
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
                >
                  <p>{m.substring(3, 0)}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </span>
    </label>
  );
};

export default DatePicker;
