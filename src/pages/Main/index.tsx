import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { format, getYear } from 'date-fns';

import api from '../../services/api';
import { SavingGoal } from '../../store/ducks/savings/types';

import { Card } from '../../components';
import * as icon from '../../icons';

const Main: React.FC = () => {
  const history = useHistory();
  const [savings, setSavings] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadData = async () => {
      const response = await api.get('saving-goals');
      setSavings(response.data);
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <Card.Wrapper>
      <Card.Title>
        {loading ? 'Loading...' : `Here's your saving goals!`}
      </Card.Title>
      {savings.map((saving: SavingGoal) => {
        const { id, name, goal, value, date } = saving;
        let text = name.replace(/([A-Z])/g, ' $1').toLowerCase();
        text = text.charAt(0).toUpperCase() + text.slice(1);
        return (
          <Card.Box key={id}>
            <Card.Head>
              <Card.Image src={icon[name]} alt={text} />
              <Card.Text>{text}</Card.Text>
            </Card.Head>
            <Card.Body>
              {!goal ? (
                <Card.Button onClick={() => history.push(`/goal/${id}`)}>
                  Start setup
                </Card.Button>
              ) : (
                <>
                  <Card.Value>$ {value}</Card.Value>
                  <Card.Small>reach your goal by</Card.Small>
                  <Card.Date>
                    {format(new Date(date), 'MMM')} {getYear(new Date(date))}
                  </Card.Date>
                </>
              )}
            </Card.Body>
          </Card.Box>
        );
      })}
    </Card.Wrapper>
  );
};

export default Main;
