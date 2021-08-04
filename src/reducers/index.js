import { combineReducers } from 'redux';

import auth from './auth';
import questions from './questions';

export const reducers = combineReducers({ auth, questions });