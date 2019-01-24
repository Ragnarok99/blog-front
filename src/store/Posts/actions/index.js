import * as types from './types';

export const fetchUser = () => {
  return {
    type: types.FETCH_POSTS
  };
};

export const fetchUserSuccess = data => {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    payload: {
      data
    }
  };
};
