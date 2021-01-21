import { SET_HERO } from '../actions/types';
import daredevilImg from '../components/menu/assets/heroes/daredevil.png';
import daredevilIcon from '../components/menu/assets/heroes/daredevil-icon.jpg';

const initialSate = {
  turn: 0,
  hero: {
    name: 'Daredevil',
    img: daredevilImg,
    icon: daredevilIcon,
    hp: 120,
    maxhp: 120,
    gold: 90,
    description: 'lorem ipsum sonato undo potento carmulento phisos tum',
    potions: [
      null,
      {
        icon: 'fa-skull-crossbones',
        type: 'posion',
        name: 'Small Potion',
        description: 'Három körön keresztül kör végén 5 méregsebzést ad a kijelölt ellenfélnek'
      },
      null
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
        name: 'route1',
        locations: [
          {
            style: 'fight',
            type: 'location',
            enemies: 2
          },
          {
            style: 'fight',
            type: 'location',
            enemies: 1
          },
          {
            type: 'common-location',
            locationNumber: 2
          },
          {
            style: 'boos',
            type: 'location',
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
