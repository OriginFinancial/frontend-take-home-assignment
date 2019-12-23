import { action } from 'typesafe-actions';
import { SavingsTypes, SavingGoals } from './types';

export const loadRequest = () => action(SavingsTypes.LOAD_REQUEST);

export const loadSuccess = (data: SavingGoals) =>
  action(SavingsTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(SavingsTypes.LOAD_FAILURE);
