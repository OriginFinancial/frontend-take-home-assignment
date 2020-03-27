import * as React from 'react';
import './App.scss';
import Logo from './icons/logo.svg';
import HomeIcon from './icons/home.svg';
import ArrowIcon from './icons/arrow.svg';
import NumberFormat from 'react-number-format';
import moment from 'moment';

export class App extends React.Component {

  private currentDate = moment().add(1, 'month');

  private state: {
    monthlyAmount: number,
    totalValue: number,
    totalMonths: number,
    currentDate: any
  };

  constructor(private props: any) {
    super(props);

    this.state = {
      monthlyAmount: 0,
      totalValue: 0,
      totalMonths: 0,
      currentDate: this.currentDate
    };

    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          this.prevMonth();
          break;

        case 'ArrowRight':
          this.nextMonth();
          break;
      }
    });
  }

  onChangeValue(values: any) {
    const { formattedValue, value } = values;
    this.setState({ totalValue: value });
    this.recalculateTotal();
  }

  recalculateTotal() {
    const now = moment();
    const end = this.currentDate;
    const durationInMonths = moment.duration(end.diff(now)).asMonths();

    this.setState({
      monthlyAmount: (this.state.totalValue / durationInMonths.toFixed(0)).toFixed(0),
      totalMonths: durationInMonths.toFixed(0)
    });
  }

  prevMonth() {
    this.currentDate.subtract(1, 'month');

    if (this.currentDate.isBefore(moment().add(1, 'month'), 'month')) {
      alert('Escolha um mês futuro');
      return this.currentDate.add(1, 'month');
    }

    this.setState({ currentDate: this.currentDate });
    this.recalculateTotal();
  }

  nextMonth() {
    this.currentDate.add(1, 'month');
    this.setState({ currentDate: this.currentDate });
    this.recalculateTotal();
  }

  render() {

    const onChangeValue = (values: any) => {
      this.onChangeValue(values);
    };

    const prevMonth: any = () => {
      this.prevMonth();
    };

    const nextMonth: any = () => {
      this.nextMonth();
    };

    return <div>
      <header>
        <img src={Logo} alt=""/>
      </header>
      <div className="container">
        <h1>Let's plan your <strong>saving goal</strong></h1>

        <main>
          <img src={HomeIcon} alt="" className="home-icon"/>
          <h2>Buy a house</h2>
          <h4>Saving goal</h4>

          <section className="amount-goal-box options">
            <div className="total-amount option">
              <div className="label">Total amount</div>
              <div className="inputs">
                <div className="money-icon-box">$</div>
                <div className="amount-value">
                  <NumberFormat value={this.state.totalValue} onValueChange={onChangeValue} thousandSeparator={true}/>
                </div>
              </div>
            </div>
            <div className="month-control-box option">
              <div className="label">Reach goal by</div>
              <div className="inputs month-control">
                <div className="control prev" id={'btn-prev'} onClick={prevMonth}><img src={ArrowIcon} alt=""/></div>
                <div className="month">
                  <div className="name">{this.state.currentDate.format('MMMM')}</div>
                  <div className="year">{this.state.currentDate.format('Y')}</div>
                </div>
                <div className="control next" id={'btn-next'} onClick={nextMonth}><img src={ArrowIcon} alt=""/></div>
              </div>
            </div>
          </section>

          <section id="result">
            <div className="detail">
              <div className="text">Monthly<span> amount</span></div>
              <div className="value">${this.state.monthlyAmount}</div>
            </div>
            <div className="note">
              You’re planning <strong>{this.state.totalMonths} monthly deposits</strong> to reach
              your <strong>$<NumberFormat value={this.state.totalValue} displayType={'text'}
                                          onValueChange={onChangeValue} thousandSeparator={true}/></strong> goal
              by <strong>{this.state.currentDate.format('MMMM')} {this.state.currentDate.format('Y')}</strong>.
            </div>
          </section>

          <button>Confirm</button>
        </main>
      </div>
    </div>
  }
}

export default App;
