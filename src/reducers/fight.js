import {CREATE_ENEMIES, NEXT_TURN, DAMAGE_ENEMY} from '../actions/types';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  turn: 'hero',
  mana: 3,
  enemies: [
    {
      id: uuidv4(),
      maxhp: 31,
      hp: 31,
      damage: 6,
      bonusDamageTurn: 0,
    },
    {
      id: uuidv4(),
      maxhp: 28,
      hp: 28,
      damage: 8,
      bonusDamgeTurn: 0,
    }
  ]
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  
  switch (type) {
    case CREATE_ENEMIES:
      return {
        ...state,
        enemies: payload
      }
    case NEXT_TURN:
      return {
        ...state,
        turn: payload
      }
    case DAMAGE_ENEMY: 
      let enemies = state.enemies;
      enemies.map(enemy => {
        if (enemy.id === payload.id) {
          enemy.hp = enemy.hp - payload.damage >= 0 ? enemy.hp - payload.damage : 0;
        }
      })
      return {
        ...state,
        enemies: enemies
      }
    default:
      return state;
  }
}