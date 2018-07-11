import { combineReducers } from 'redux';
import player from './player';
import opponent from './opponent';
import game from './game';

const rootReducer = combineReducers({
  player,
  opponent,
  game
});

export default rootReducer;
