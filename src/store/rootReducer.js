import { combineReducers } from 'redux';

import { rootReducer as Posts } from './Posts';

const entities = combineReducers({
  Posts
});

export default entities;
