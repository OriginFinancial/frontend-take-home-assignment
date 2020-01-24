import { useEffect, useState } from 'react';
import { listGoals } from '../services/goals';

const filterGoals = (goals, defaultGoals) => {
  return defaultGoals.filter(goal => goals[goal.id]);
};

const useGoals = defaultGoals => {
  const [goals, setGoals] = useState(defaultGoals);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await listGoals();
        const filteredGoals = filterGoals(response, defaultGoals);

        setGoals(filteredGoals);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [defaultGoals]);

  return { goals, error };
};

export { useGoals };
