import {
  GRAVATAR_REQUEST_STARTED,
  GRAVATAR_REQUEST,
  GRAVATAR_REQUEST_FAIL,
} from '../actions/gamepage';

const INITIAL_STATE = {
  gravatar: '',
  isLoading: false,
  score: 0,
};

const gamepage = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GRAVATAR_REQUEST_STARTED:
    return { ...state, isLoading: true };
  case GRAVATAR_REQUEST:
    return { ...state, gravatar: action.gravatar, isLoading: false };
  case GRAVATAR_REQUEST_FAIL:
    return { ...state, isLoading: false };
  default:
    return state;
  }
};

export default gamepage;