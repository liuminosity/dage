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
  username: null
};

export default function (state = initialState, action = {}) {

  const { data, type } = action;

  switch (type) {
    case USER_FETCH_SUCCEEDED:
      return {
        ...state,
        authenticated: true,
        username: data.username,
      };

    case TOKEN_DELETE_FAILED:
      return {
        ...state,
        authenticated: false,
      };

    default:
      return state;
  }

}

const initialState = {
  authenticated: false,
  username: null,
};

export default  createReducer(initialState, {




})
