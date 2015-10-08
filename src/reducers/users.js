import { createReducer } from 'utils';
import {
  APPLICATION_LOADED,
  LOGIN_SUBMITTED,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
  USER_FETCHED,
  USER_FETCH_SUCCEEDED,
  USER_FETCH_FAILED,
  TOKEN_DELETED,
  TOKEN_DELETE_SUCCEEDED,
  TOKEN_DELETE_FAILED,
} from 'constants/users';

const initialState = {
  authenticated: false,
  username: null,
};

export default createReducer(initialState, {
  [USER_FETCH_SUCCEEDED]: (state, payload) => {
    return {
      ...state,
      authenticated: true,
      username: payload.username,
      level: payload.level,
    }
  },

  [TOKEN_DELETED]: (state, payload) => {
    return {
      ...state,
      authenticated: false,
    }
  },

})
