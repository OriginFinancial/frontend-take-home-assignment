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

export interface SavingGoal {
  userId?: number;
  name: string;
  goal?: boolean;
  value?: number;
  date?: string;
  id?: number;
}

/**
 * State types
 */

export interface SavingsState {
  readonly data: SavingGoal[];
  readonly loading: boolean;
  readonly error: boolean;
}
