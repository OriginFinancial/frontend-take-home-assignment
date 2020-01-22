import React from 'react';
import { Academy, Beach, Car, Rings, Economy, Baby } from '../components/Icons';

const college = {
  id: 'goToCollege',
  title: 'Go to college',
  icon: <Academy />
};
const vacation = {
  id: 'takeAVacation',
  title: 'Take a vacation',
  icon: <Beach />
};
const car = {
  id: 'buyACar',
  title: 'Buy a car',
  icon: <Car />
};
const weeding = {
  id: 'throwAWeddingParty',
  title: 'Throw a wedding party',
  icon: <Rings />
};
const emergency = {
  id: 'buildAnEmergencyFund',
  title: 'Build an emergency fund',
  icon: <Economy />
};
const baby = {
  id: 'haveABaby',
  title: 'Have a baby',
  icon: <Baby />
};

export default [college, vacation, car, weeding, emergency, baby];
