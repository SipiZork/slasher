import { SET_HERO, SHUFFLE_DECK, ADD_CARDS_TO_HAND, SELECT_CARD_TO_PLAY, ADD_ARMOR_TO_HERO, REMOVE_CARD, ADD_TO_USED_CARDS } from '../actions/types';
import daredevilImg from '../components/menu/assets/heroes/daredevil.png';
import daredevilIcon from '../components/menu/assets/heroes/daredevil-icon.jpg';
import { v4 as uuidv4 } from 'uuid';

const initialSate = {
  turn: 0,
  status: 'select-route',
  selectedCardToPlay: null,
  hero: {
    name: 'Daredevil',
    img: daredevilImg,
    icon: daredevilIcon,
    hp: 120,
    armor: 5,
    maxhp: 120,
    gold: 90,
    description: 'lorem ipsum sonato undo potento carmulento phisos tum',
    cards: [
      {
        id: uuidv4(),
        mana: 1,
        name: 'Bal egyenes',
        type: 'attack',
        damage: 6,
        defense: 0,
        bonusDamage: 0,
        text: '6 sebzés egy ellenfélre'
      },
      {
        id: uuidv4(),
        mana: 1,
        name: 'Bal egyenes',
        type: 'attack',
        damage: 6,
        defense: 0,
        bonusDamage: 0,
        text: '6 sebzés egy ellenfélre'
      },
      {
        id: uuidv4(),
        mana: 1,
        name: 'Bal egyenes',
        type: 'attack',
        damage: 6,
        defense: 0,
        bonusDamage: 0,
        text: '6 sebzés egy ellenfélre'
      },
      {
        id: uuidv4(),
        mana: 1,
        name: 'Bal egyenes',
        type: 'attack',
        damage: 6,
        defense: 0,
        bonusDamage: 0,
        text: '6 sebzés egy ellenfélre'
      },
      {
        id: uuidv4(),
        mana: 1,
        name: 'Bal egyenes',
        type: 'attack',
        damage: 6,
        defense: 0,
        bonusDamage: 0,
        text: '6 sebzés egy ellenfélre'
      },
      {
        id: uuidv4(),
        mana: 1,
        name: 'Védekezés',
        type: 'defend',
        damage: 0,
        defense: 5,
        bonusDamage: 0,
        text: '5 páncél magadra'
      },
      {
        id: uuidv4(),
        mana: 1,
        name: 'Védekezés',
        type: 'defend',
        damage: 0,
        defense: 5,
        bonusDamage: 0,
        text: '5 páncél magadra'
      },
      {
        id: uuidv4(),
        mana: 1,
        name: 'Védekezés',
        type: 'defend',
        damage: 0,
        defense: 5,
        bonusDamage: 0,
        text: '5 páncél magadra'
      },
      {
        id: uuidv4(),
        mana: 1,
        name: 'Védekezés',
        type: 'defend',
        damage: 0,
        defense: 5,
        bonusDamage: 0,
        text: '5 páncél magadra'
      },
      {
        id: uuidv4(),
        mana: 2,
        name: 'Botolás',
        type: 'attack',
        damage:  8,
        defense: 0,
        bonusDamage: 2,
        text: '8 sebzés egy ellenfélnek. Bónuszsebzés a következő 2 körben'
      },
    ],
    inHandCards: [],
    usedCards: [],
    potions: [
      {
        id: uuidv4(),
        name: null
      },
      {
        id: uuidv4(),
        icon: 'fa-skull-crossbones',
        type: 'posion',
        name: 'Small Potion',
        description: 'Három körön keresztül kör végén 5 méregsebzést ad a kijelölt ellenfélnek'
      },
      {
        id: uuidv4(),
        name: null
     }
    ],
    specials: [
      {
        name: 'Vak vezet világtalant',
        description: 'Minden kör végén neki megy a falnak és elszenved 4 sebzést'
      }
    ]
  },
  loading: true,
  map: {
    routes: [
      {
        name: 'Az ördög ösvénye',
        id: uuidv4(),
        locations: [
          {
            id: uuidv4(),
            style: 'fight',
            type: 'location',
            icon: 'pastafarianism',
            level: 0,
            enemies: 2
          },
          {
            id: uuidv4(),
            style: 'fight',
            type: 'location',
            icon: 'pastafarianism',
            level: 1,
            enemies: 1
          },
          {
            id: uuidv4(),
            style: 'shop',
            type: 'common-location',
            icon: 'store',
            level: 2,
            locationNumber: 2
          },
          {
            id: uuidv4(),
            style: 'boss',
            type: 'location',
            icon: 'dragon',
            level: 3,
            enemies: 1
          }
        ]
      }
    ]
  }
};

export default function (state = initialSate, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_HERO:
      return {
        ...state,
        hero: payload
      };
    case SHUFFLE_DECK:
      return {
        ...state,
        hero: {
          ...state.hero,
          cards: state.hero.cards.sort(() => Math.random() - 0.5)
        }
      };
    case ADD_CARDS_TO_HAND:
      return {
        ...state,
        hero: {
          ...state.hero,
          inHandCards: payload
        }
      }
    case SELECT_CARD_TO_PLAY:
      return {
        ...state,
        selectedCardToPlay: payload
      }
    case ADD_ARMOR_TO_HERO:
      return {
        ...state,
        hero: {
          ...state.hero,
          armor: state.hero.armor + payload
        }
      }
    case REMOVE_CARD:
      return {
        ...state,
        hero: {
          ...state.hero,
          inHandCards: state.hero.inHandCards.filter(card => card.id !== payload)
        }
      }
    case ADD_TO_USED_CARDS:
      return {
        ...state,
        hero: {
          ...state.hero,
          usedCards: [...state.hero.usedCards, payload]
        }
      }
    default:
      return state
  }
}
