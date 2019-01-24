import { takeLatest } from 'redux-saga/effects';

import fetchPosts from './fetchPosts';
import * as types from '../actions/types';

export default function* root() {
  yield takeLatest(types.FETCH_POSTS, fetchPosts);
}
