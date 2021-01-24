import { CREATE_ENEMIES, NEXT_TURN, DAMAGE_ENEMY } from './types';
import { v4 as uuidv4 } from 'uuid';

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min); 
}

export const createEnemies = (numberOfEnemies, level) => dispatch => {
  let enemies = [];
  for (let i = 0; i < numberOfEnemies; i++) {
    let healthPoint = randomNumber(20, 40) * (level + 1);
    let damagePoint = randomNumber(5, 10) * (level + 1);
    let enemy = {
      id: uuidv4(),
      maxhp: healthPoint,
      hp: healthPoint,
      damage: damagePoint
    }
    enemies.push(enemy);
  }
  try {
    dispatch({
      type: CREATE_ENEMIES,
      payload: enemies
    });
  } catch (err) {
    console.log(err);
  }
};

export const nextTurn = (next) => dispatch => {
  try {
    dispatch({
      type: NEXT_TURN,
      payload: next
    })
  } catch (err) {
    console.log(err);
  }
};

export const damageEnemy = (id, damage) => dispatch => {
  try {
    dispatch({
      type: DAMAGE_ENEMY,
      payload: {
        id: id,
        damage: damage
      }
    })
  } catch (err) {
    console.log(err);
  }
}