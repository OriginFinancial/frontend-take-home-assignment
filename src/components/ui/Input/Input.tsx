import * as React from 'react';
import './input.scss';

const Input: React.FC = () => {
  return (
    <label htmlFor="aa" className="input">
      Total amount
      <span className="innerHolder">
        <span className="icon">$</span>
        <input type="number" id="aa" />
      </span>
    </label>
  );
};

export default Input;
