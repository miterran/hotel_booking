import { combineReducers } from 'redux';
import user from './user';
import users from './users';
import hotelsQuery from './hotelsQuery';
import hotels from './hotels';

export default combineReducers({ user, users, hotelsQuery, hotels });
