import { SET_HERO } from './types';

export const setHero = (hero) => dispatch => {
  try {
    dispatch({
      type: SET_HERO,
      payload: hero
    });
  } catch (err) {
    console.log(err);
  }
};