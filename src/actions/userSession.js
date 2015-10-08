import request from '../_config/superagent';

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
} from 'constants/userSession';

//invoked on application load. Assumes user is auth'd. Sends GET request to server for a given user--
//if user is not auth'd, would ideally redirect to a login page (in this case, sense dispatch for userFetchError)

var serverUrl = 'http://127.0.0.1:4000';

export function applicationLoaded(data) {
  return dispatch => {
    dispatch({
      type: APPLICATION_LOADED,
      data,
    });

    var token = window.localStorage.getItem('dage-token');
    return request
      .post(/*TODO: fill in with correct user (NOT TOKEN!) url*/)
      .send(JSON.stringify(token))
      .end((err, res={}) => {
        const { body } = res;

        err || res.body.error ?
          dispatch(userFetchError()) :
          dispatch(userFetchSuccess(body));
      });

  };
}

<<<<<<< 029e3ae978423040a75c5cf4dccda6dcd555bb3e:src/actions/userSession.js
=======

>>>>>>> [feat] (server): add local storage of tokens (still not functional):src/actions/users.js
export function submitLogin(data) {
  return dispatch => {
    dispatch({
      type: LOGIN_SUBMITTED,
      payload: { data },
    });

    return request
      .post(serverUrl + '/userLogin')
      .send(data)
      .end((err, res) => {
<<<<<<< 029e3ae978423040a75c5cf4dccda6dcd555bb3e:src/actions/userSession.js
        if (err) {
          dispatch(loginFailed());
        } else {
          if (res.body.token) {
            window.localStorage.setItem('dage-token', res.body.token);
            window.location.reload();
          } else {
            dispatch(loginFailed());
          }
        }

        // window.location.reload();
=======
        err ?
          dispatch(loginFailed()) :

          //TODO: change token to body.token or whatever the server sends back
          window.localStorage.setItem('dage-token', res.body.token);
          window.location.reload();
>>>>>>> [feat] (server): add local storage of tokens (still not functional):src/actions/users.js
      });
  };
}

export function loginFailed(error) {
  return {
    type: LOGIN_FAILED,
    payload: { error },
  };
}

<<<<<<< 029e3ae978423040a75c5cf4dccda6dcd555bb3e:src/actions/userSession.js
//body should be server response from
export function userFetchSuccess(body) {
  console.log('user fetch success');
=======

export function userFetchSuccess(token) {
>>>>>>> [feat] (server): add local storage of tokens (still not functional):src/actions/users.js
  return {
    type: USER_FETCH_SUCCEEDED,
    payload: {
      body,
      receivedAt: Date.now(),
    },
  };
}

export function userFetchError(error) {
  console.log('user fetch error');
  return {
    type: USER_FETCH_FAILED,
    payload: { error },
  };
}

export function deleteToken() {
  return dispatch => {
    dispatch({
      type: TOKEN_DELETED,
    });
    window.localStorage.removeItem('dage-token');
    dispatch({
      type: TOKEN_DELETE_SUCCEEDED,
    });
  };
}

