import types from './types';
import { combineReducers } from 'redux';

const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case types.CONTACT_ADD:
      return [...state, payload];

    case types.CONTACT_DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contacts,
  filter,
});

export default rootReducer;
