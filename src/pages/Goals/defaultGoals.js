import React from 'react';
import {
  Academy,
  Beach,
  Car,
  Rings,
  Economy,
  Baby
} from '../../components/Icons';

const college = {
  title: 'Go to college',
  icon: <Academy />
};
const vacation = {
  title: 'Take a vacation',
  icon: <Beach />
};
const car = {
  title: 'Buy a car',
  icon: <Car />
};
const weeding = {
  title: 'Throw a wedding party',
  icon: <Rings />
};
const emergency = {
  title: 'Build an emergency fund',
  icon: <Economy />
};
const baby = {
  title: 'Have a baby',
  icon: <Baby />
};

export default [college, vacation, car, weeding, emergency, baby];
