import axios from 'axios';

import authActions from './authActions.js';

// axios.defaults.baseURL = 'https://fierce-plateau-20788.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = ({
  name,
  email,
  password,
  passwordConfirm,
}) => async dispatch => {
  dispatch(authActions.registerRequest());
  try {
    const { data } = await axios.post(
      'https://fierce-plateau-20788.herokuapp.com/users/signup',
      {
        name,
        email,
        password,
        passwordConfirm,
      },
    );
    token.set(data.token);
    dispatch(authActions.registerSuccess(data));
  } catch (error) {
    dispatch(authActions.registerError(error));
  }
};

const logIn = ({ email, password }) => async dispatch => {
  dispatch(authActions.logInRequest());
  try {
    const { data } = await axios.post(
      'https://fierce-plateau-20788.herokuapp.com/users/signin',
      {
        email,
        password,
      },
    );
    token.set(data.token);
    dispatch(authActions.logInSuccess(data));
  } catch (error) {
    dispatch(authActions.logInError(error));
  }
};

const logOut = () => async dispatch => {
  dispatch(authActions.logOutRequest());
  try {
    await axios.post('https://fierce-plateau-20788.herokuapp.com/users/logout');
    token.unset();
    dispatch(authActions.logOutSuccess());
  } catch (error) {
    dispatch(authActions.logOutError(error));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const state = getState();
  const persistedToken = state.auth.token;
  if (!persistedToken) return;
  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());
  try {
    const { data } = await axios.get(
      'https://fierce-plateau-20788.herokuapp.com/users/current',
    );
    dispatch(authActions.getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error));
  }
};

export default {
  register,
  logIn,
  logOut,
  getCurrentUser,
};
