import * as React from 'react';
import styled from 'styled-components';
import { format, differenceInMonths } from 'date-fns';

import Page from '../components/Page';
import Card from '../components/Card';
import Form from '../components/Form';
import Alert from '../components/Alert';
import Icon from '../components/Icon';
import InputMonth from '../components/InputMonth';
import Button from '../components/Button';

const AlertWrapper = styled.div`
  margin-top: 30px;
`;

const MonthlyAmountCopy = styled.div`
  ${props => `
    ${props.theme.breakpoints.md} {
      font-size: 18px;
    }
  `}
`;

const MonthlyAmountValue = styled.div`
  font-size: 26px;
  color: #0079ff;

  ${props => `
    ${props.theme.breakpoints.md} {
      font-size: 40px;
    }
  `}
`;

const PlanYourSavings: React.FunctionComponent = () => {
  const [date, setDate] = React.useState();
  const [now] = React.useState(Date.now());

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
            <Form>
              <Form.Group>
                <Form.Control>
                  <Form.Label htmlFor="amount">Total amount</Form.Label>
                  <input />
                </Form.Control>

                <Form.Control>
                  <Form.Label htmlFor="goal">Reach goal by</Form.Label>
                  <InputMonth onChange={setDate} />
                </Form.Control>
              </Form.Group>
            </Form>

            <AlertWrapper>
              <Alert>
                <Alert.Body>
                  <MonthlyAmountCopy>Monthly amount</MonthlyAmountCopy>
                  <MonthlyAmountValue>$521</MonthlyAmountValue>
                </Alert.Body>
                <Alert.Footer>
                  You’re planning{' '}
                  <strong data-testid="alert-date-distance">
                    {date && differenceInMonths(date, now)} monthly deposits
                  </strong>{' '}
                  to reach your{' '}
                  <strong data-testid="alert-goal">$25,000</strong> goal by{' '}
                  <strong data-testid="alert-selected-date">
                    {date && format(date, 'MMMM')}{' '}
                    {date && format(date, 'yyyy')}
                  </strong>
                </Alert.Footer>
              </Alert>
            </AlertWrapper>

            <Card.Action>
              <Button>Confirm</Button>
            </Card.Action>
          </Card.Body>
        </Card>
      </Page.Body>
    </Page>
  );
};

export default PlanYourSavings;
