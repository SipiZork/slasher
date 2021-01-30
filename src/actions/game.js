import { SET_HERO, SHUFFLE_DECK, ADD_CARDS_TO_HAND, SELECT_CARD_TO_PLAY, ADD_ARMOR_TO_HERO, REMOVE_CARD, ADD_TO_USED_CARDS } from './types';

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

export const shuffleDeck = () => dispatch => {
  try {
    dispatch({
      type: SHUFFLE_DECK
    });
  } catch (err) {
    console.log(err);
  }
};

export const addCardToHand = (cards) => dispatch => {
  let cardsToHand = [];
  for (let i = 0; i < 5; i++) {
    cardsToHand.push(cards.shift());
  }
  try {
    dispatch({
      type: ADD_CARDS_TO_HAND,
      payload: cardsToHand
    });
  } catch (err) {
    console.log(err);
  }
};

export const selectCardToPlay = (card) => dispatch => {
  try {
    dispatch({
      type: SELECT_CARD_TO_PLAY,
      payload: card !== null ? card.id : null
    })
  } catch (err) {
    console.log(err);
  }
};

export const addArmorToHero = (armor) => dispatch => {
  try {
    dispatch({
      type: ADD_ARMOR_TO_HERO,
      payload: armor
    })
  } catch (err) {
    console.log(err);
  }
};

export const removeCard = (id) => dispatch => {
  try {
    dispatch({
      type: REMOVE_CARD,
      payload: id
    })
  } catch (err) {
    console.log(err);
  }
};

export const addToUsedCards = (card) => dispatch => {
  try {
    dispatch({
      type: ADD_TO_USED_CARDS,
      payload: card
    })
  } catch (err) {
    console.log(err);
  }
};