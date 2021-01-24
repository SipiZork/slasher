import {CREATE_ENEMIES} from './types';

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min); 
}

export const createEnemies = (numberOfEnemies, level) => dispatch => {
  let enemies = [];
  for (let i = 0; i < numberOfEnemies; i++) {
    let healthPoint = randomNumber(20, 40) * (level + 1);
    let damagePoint = randomNumber(5, 10) * (level + 1);
    let enemy = {
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
}