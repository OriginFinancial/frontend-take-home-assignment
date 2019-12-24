import { Reducer } from 'redux';
import { SavingsState, SavingsTypes } from './types';

const INITIAL_STATE: SavingsState = {
  data: [
    // 'buyACar',
    // 'buildAnEmergencyFund',
    // 'goToCollege',
    // 'throwAWeddingParty',
    // 'haveABaby',
    // 'buyAHouse',
    // 'takeAVacation'
  ],
  error: false,
  loading: false
};

const reducer: Reducer<SavingsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SavingsTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case SavingsTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data
      };
    case SavingsTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
};

export default reducer;
