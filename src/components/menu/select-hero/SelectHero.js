import React, { Fragment, useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import './SelectHero.scss';
import daredevilImg from '../assets/heroes/daredevil.png';
import daredevilIcon from '../assets/heroes/daredevil-icon.jpg';
import punisherImg from '../assets/heroes/punisher.png';
import punisherIcon from '../assets/heroes/punisher-icon.png';
import HeroInfo from '../../menu/hero-info/HeroInfo';
import { v4 as uuidv4 } from 'uuid';

import { setHero } from '../../../actions/game';

import { connect } from 'react-redux';

const SelectHero = ({ setHero, history }) => {

  const [heroes, setHeroes] = useState([
    {
      name: 'Daredevil',
      img: daredevilImg,
      icon: daredevilIcon,
      hp: 120,
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
    {
      name: 'Punisher',
      img: punisherImg,
      icon: punisherIcon,
      hp: 450,
      maxhp: 450,
      gold: 0,
      description: 'lorem ipsum sonato undo potento carmulento phisos tum',
      potions: [null,null,null],
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

  const startGame = () => {
    setHero(selectedHero);
    history.push('/select-route');
  }

  return (
    <Fragment>
      <div className={`select-hero-background${shake ? ' shake' : ''}`} style={{ backgroundImage: `url(${selectedHero.img})` }}></div>
      <div className={`hero${moveIn ? ' move-in' :''}`}>
        <HeroInfo hero={selectedHero} moveIn={moveIn} />
        <button type="submit" onClick={startGame}>Indítás</button>
      </div>
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

export default connect(null, { setHero })(SelectHero);