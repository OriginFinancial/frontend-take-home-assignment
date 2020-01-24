import axios from 'axios';

const GOALS_API = 'https://origin-savings-api.herokuapp.com/saving-goals';

const listGoals = () => axios.get(GOALS_API);

export { listGoals };
