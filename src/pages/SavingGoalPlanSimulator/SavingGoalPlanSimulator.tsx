import * as React from 'react';
import DatePicker from '../../components/UI/DatePicker/DatePicker';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import './savingGoalPlanSimulator.scss';

const SavingGoalPlanSimulator: React.FC = () => {
  const [zz, setZz] = React.useState(1);
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
          <DatePicker />
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
        {/* OBJECTIVE */}
        <Button />
      </div>
    </section>
  );
};

export default SavingGoalPlanSimulator;
