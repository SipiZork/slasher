import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import './SelectHero.scss';
import daredevilImg from '../assets/heroes/daredevil.png';
import daredevilIcon from '../assets/heroes/daredevil-icon.jpg';
import punisherImg from '../assets/heroes/punisher.png';
import punisherIcon from '../assets/heroes/punisher-icon.png';

import HeroInfo from '../../menu/hero-info/HeroInfo';

const SelectHero = () => {

  const [heroes, setHeroes] = useState([
    {
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
    {
      name: 'Punisher',
      img: punisherImg,
      icon: punisherIcon,
      hp: 450,
      gold: 0,
      description: 'lorem ipsum sonato undo potento carmulento phisos tum',
      specials: [
        {
          name: 'Bika fej',
          description: 'Minden körben egy random sebzést figyelmen kívül hagy'
        }
      ]
    }
  ]);

  const [selectedHero, setSelectedHero] = useState(heroes[0]);

  const [shake, setShake] = useState(false);

  const [moveIn, setMoveIn] = useState(false);

  const changeHero = (hero) => {
    if (!shake && hero !== selectedHero) {
      setShake(true);
      setMoveIn(true);
      setTimeout(() => {
        setShake(false);
      }, 500);
      setTimeout(() => {
        setMoveIn(false);
      },150)
      setSelectedHero(hero);
    }
  }

  return (
    <Fragment>
      <div className={`select-hero-background${shake ? ' shake' : ''}`} style={{ backgroundImage: `url(${selectedHero.img})` }}></div>
      <HeroInfo hero={selectedHero} moveIn={moveIn} />
      <div className="select-hero">
        {heroes.map(hero => 
          <div className="select-hero-btn" key={hero.name}>
            <img src={hero.icon} alt={`hero-${hero.name.toLowerCase()}`} onClick={() => changeHero(hero)} />
          </div>  
        )}
      </div>
      <Link to="/" className="back">Vissza</Link>
    </Fragment>
  )
}

export default SelectHero;