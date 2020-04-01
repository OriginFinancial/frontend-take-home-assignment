import * as React from 'react';
import './savingGoalPlanSimulator.scss';

const SavingGoalPlanSimulator: React.FC = () => {
  const [zz, setZz] = React.useState(1);
  return (
    <section className={'savingGoalPlanSimulator'}>
      <h3>
        Let's plan your <strong>saving goal.</strong>
      </h3>
      {/* CALCULATOR */}
      <div className="goalPlanCalculator">
        <div className="column">
          <img src={require('~/assets/icons/house.svg')} alt="House" />
          <h2>Buy a house</h2>
          <p>Saving goal</p>
        </div>
        <div className="row">
          {/* INPUT COMPONENT */}
          <div className="inputComp">
            <label htmlFor="">Total amount</label>
            <span className="input">
              <span>$</span>
              <input type="number" />
            </span>
          </div>
          {/* INPUT COMPONENT */}
          <div className="datePickerComp">
            <label htmlFor="">Reach goal by</label>
            <span>
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
          </div>
        </div>
        {/* PLAN SUMMARY */}
        <div className="planSummary">
          <div className="row">
            <h5>Monthly amount</h5>
            <h1>$521</h1>
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
        {/* BUTTON COMPONENT */}
        <button>Confirm</button>
      </div>
    </section>
  );
};

export default SavingGoalPlanSimulator;
