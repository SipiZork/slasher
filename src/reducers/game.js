import { SET_HERO } from '../actions/types';
import daredevilImg from '../components/menu/assets/heroes/daredevil.png';
import daredevilIcon from '../components/menu/assets/heroes/daredevil-icon.jpg';

const initialSate = {
  hero: {
    name: 'Daredevil',
    img: daredevilImg,
    icon: daredevilIcon,
    hp: 120,
    gold: 90,
    description: 'lorem ipsum sonato undo potento carmulento phisos tum',
    specials: [
      {
        name: 'Vak vezet világtalant',
        description: 'Minden kör végén neki megy a falnak és elszenved 4 sebzést'
      }
    ]
  },
  loading: false,
  map: {
    0: [
      {
        style: 'fight',
        enemies: 2
      },
      {
        style: 'fight',
        enemies: 1
      },
      {
        style: 'shop',
        enemies: 0
      }
    ],
    1: [
      {
        stlye: 'shop',
        enemies: 0
      },
      {
        style: 'fight',
        enemies: 2
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
