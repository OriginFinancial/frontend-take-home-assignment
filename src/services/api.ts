import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With',
    'Access-Control-Allow-Methods': 'GET, PUT, POST',
    crossdomain: true
  }
});

export default api;
