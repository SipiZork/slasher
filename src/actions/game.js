import { SET_HERO, SHUFFLE_DECK } from './types';

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

export const shuffleDeck = (cards) => dispatch => {
  
  console.log('done');
  try {
    dispatch({
      type: SHUFFLE_DECK,
      payload: cards
    });
  } catch (err) {
    console.log(err);
  }
};