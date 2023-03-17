import { FECTH_API, EXPENSE_ADD, DELETE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FECTH_API:
    return {
      ...state,
      currencies: Object.keys(action.data),
    };
  case EXPENSE_ADD:
    return {
      ...state,
      expenses: [...state.expenses, action.expense],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((element) => element.id !== action.expense),
    };
  default:
    return {
      ...state,
    };
  }
};

export default wallet;
