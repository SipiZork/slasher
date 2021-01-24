import { SET_HERO } from '../actions/types';
import daredevilImg from '../components/menu/assets/heroes/daredevil.png';
import daredevilIcon from '../components/menu/assets/heroes/daredevil-icon.jpg';
import { v4 as uuidv4 } from 'uuid';

const initialSate = {
  turn: 0,
  status: 'select-route',
  hero: {
    name: 'Daredevil',
    img: daredevilImg,
    icon: daredevilIcon,
    hp: 12,
    maxhp: 120,
    gold: 90,
    description: 'lorem ipsum sonato undo potento carmulento phisos tum',
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
      }
  
    default:
      return state
  }
}
