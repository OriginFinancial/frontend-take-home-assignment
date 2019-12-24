import { action } from 'typesafe-actions';
import { SavingsTypes, SavingGoal } from './types';

export const loadRequest = () => action(SavingsTypes.LOAD_REQUEST);

export const loadSuccess = (data: SavingGoal[]) =>
  action(SavingsTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(SavingsTypes.LOAD_FAILURE);
