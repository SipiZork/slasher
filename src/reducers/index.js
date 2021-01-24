import { combineReducers } from 'redux';
import game from './game';
import fight from './fight';

export default combineReducers({
  game,
  fight
});