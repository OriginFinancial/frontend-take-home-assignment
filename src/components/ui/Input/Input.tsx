import * as React from 'react';
import './input.scss';

interface Props {
  type?: string;
  initialValue?: number;
  onChange?: () => void;
}

const Input: React.FC<Props> = props => {
  return (
    <label className="input">
      Total amount
      <span className="innerHolder">
        <span className="icon">$</span>
        <input
          type={props.type}
          onChange={props.onChange}
          value={props.initialValue}
        />
      </span>
    </label>
  );
};

export default Input;
