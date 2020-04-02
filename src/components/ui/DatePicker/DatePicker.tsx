import * as React from 'react';
import './datePicker.scss';

const DatePicker: React.FC = () => {
  return (
    <label className="datePicker">
      Reach goal by
      <span className="innerHolder">
        <button className="back">
          <img src={require('~/assets/icons/arrow.svg')} />
        </button>
        <button className="pickerDisplay">
          <h4>October</h4>
          <p>2020</p>
        </button>
        <button className="forward">
          <img src={require('~/assets/icons/arrow.svg')} />
        </button>
      </span>
    </label>
  );
};

export default DatePicker;
