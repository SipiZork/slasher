import {CREATE_ENEMIES} from '../actions/types';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  enemies: []
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  
  switch (type) {
    case CREATE_ENEMIES:
      return {
        enemies: payload
      }
    default:
      return state;
  }
}