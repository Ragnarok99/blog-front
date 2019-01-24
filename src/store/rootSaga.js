import { all, fork } from "redux-saga/effects";

import { rootSaga as Posts } from "./Posts";

export default function* rootSaga() {
  yield all([fork(Posts)]);
}