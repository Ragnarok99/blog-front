import { call, put } from 'redux-saga/effects';

import * as actions from '../actions';
/* import * as api from "../../../api";
 */
export default function* fetchPosts(action) {
  try {
    const data = [{}];
    /* const { data } = yield call(api.user.fetchUser);
    console.log({ data }); */
    yield put(actions.fetchUserSuccess(data));
  } catch (error) {
    console.log(error);
  }
}
