import {
  GRAVATAR_REQUEST_STARTED,
  GRAVATAR_REQUEST,
  GRAVATAR_REQUEST_FAIL,
  NAME_CHANGE,
  EMAIL_CHANGE,
} from '../actions';

const INITIAL_STATE = {
  gravatar: '',
  isLoading: false,
  score: 0,
  completeName: '',
  email: '',
};

const gamepage = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GRAVATAR_REQUEST_STARTED:
    return { ...state, isLoading: true };
  case GRAVATAR_REQUEST:
    return { ...state, gravatar: action.gravatar, isLoading: false };
  case GRAVATAR_REQUEST_FAIL:
    return { ...state, isLoading: false };
  case NAME_CHANGE:
    return {
      ...state,
      completeName: action.completeName,
    };
  case EMAIL_CHANGE:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default gamepage;
