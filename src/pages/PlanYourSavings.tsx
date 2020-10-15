import * as React from 'react';
import { differenceInMonths, format } from 'date-fns';

import Page from '../components/Page';
import Card from '../components/Card';
import Form from '../components/Form';
import Alert from '../components/Alert';
import Icon from '../components/Icon';
import InputMonth from '../components/InputMonth';
import InputMoney from '../components/InputMoney';
import Button from '../components/Button';

import { formatMoney } from '../helpers/MoneyFormatter';

const PlanYourSavings: React.FunctionComponent = () => {
  const [date, setDate] = React.useState();
  const [value, setValue] = React.useState();

  const [year, setYear] = React.useState(null);
  const [month, setMonth] = React.useState(null);
  const [distance, setDistance] = React.useState(null);
  const [monthlyAmount, setMonthlyAmount] = React.useState('0');
  const [totalAmount, setTotalAmount] = React.useState('0');

  const [now] = React.useState(Date.now());

  React.useEffect(() => {
    if (!date) {
      return;
    }

    const formattedYear = format(date, 'yyyy');
    const formattedMonth = format(date, 'MMMM');
    const formattedDay = differenceInMonths(date, now);

    setYear(formattedYear);
    setMonth(formattedMonth);
    setDistance(formattedDay);
  }, [date, now]);

  React.useEffect(() => {
    if (!value) {
      return;
    }

    // @ts-ignore
    const formattedMonthlyAmount = formatMoney(value / distance);
    const formattedTotalAmount = formatMoney(value);

    setMonthlyAmount(formattedMonthlyAmount);
    setTotalAmount(formattedTotalAmount);
  }, [value, distance]);

  return (
    <Page>
      <Page.Title>
        Let&apos;s plan your <strong>saving goal.</strong>
      </Page.Title>

      <Page.Body>
        <Card>
          <Card.Icon>
            <Icon.House />
          </Card.Icon>
          <Card.Title>Buy a house</Card.Title>
          <Card.Subtitle>Saving goal</Card.Subtitle>

          <Card.Body>
            <Card.BodySection>
              <Form>
                <Form.Group>
                  <Form.Control>
                    <Form.Label htmlFor="amount">Total amount</Form.Label>
                    <InputMoney onChange={setValue} />
                  </Form.Control>

                  <Form.Control>
                    <Form.Label htmlFor="goal">Reach goal by</Form.Label>
                    <InputMonth onChange={setDate} />
                  </Form.Control>
                </Form.Group>
              </Form>
            </Card.BodySection>

            <Card.BodySection>
              <Alert>
                <Alert.Body>
                  <Alert.Title>Monthly amount</Alert.Title>
                  <Alert.Money>${monthlyAmount}</Alert.Money>
                </Alert.Body>
                <Alert.Footer>
                  You’re planning{' '}
                  <strong data-testid="alert-date-distance">{distance} monthly deposits</strong>{' '}
                  to reach your{' '}
                  <strong data-testid="alert-goal">${totalAmount}</strong> goal
                  by{' '}
                  <strong data-testid="alert-selected-date">
                    {month} {year}
                  </strong>
                </Alert.Footer>
              </Alert>
            </Card.BodySection>
          </Card.Body>

          <Card.Action>
            <Button>Confirm</Button>
          </Card.Action>
        </Card>
      </Page.Body>
    </Page>
  );
};

export default PlanYourSavings;
