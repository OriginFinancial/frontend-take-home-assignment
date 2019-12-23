/**
 * Action types
 */

export enum SavingsTypes {
  LOAD_REQUEST = '@savings/LOAD_REQUEST',
  LOAD_SUCCESS = '@savings/LOAD_SUCCESS',
  LOAD_FAILURE = '@savings/LOAD_FAILURE'
}

/**
 * Data types
 */

export interface SavingGoals {
  data: string[];
}

/**
 * State types
 */

export interface SavingsState {
  readonly data: string[];
  readonly loading: boolean;
  readonly error: boolean;
}
