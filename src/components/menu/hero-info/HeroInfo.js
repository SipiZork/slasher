import { specialChars } from '@testing-library/user-event';
import React from 'react';
import './HeroInfo.scss';

const HeroInfo = ({ hero, moveIn }) => {
  return (
    <div className='hero-info'>
      
      <div className="hp-gold-info">
        <div className="hp info">
          <div className="icon">
            <i className="fas fa-heart"></i>
          </div>
          <div className="data">
            {hero.hp}
          </div>
        </div>
        <div className="gold info">
          <div className="icon">
            <i className="fas fa-coins"></i>
          </div>
          <div className="data">
            {hero.gold}
          </div>
        </div>
      </div>
      <div className="description">
        <p>{hero.description}</p>
      </div>
      <div className="specials">
        {hero.specials.map(special => 
          <div className="special" key={special.name}>
            <h2>{special.name}</h2>
            <p>{special.description}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default HeroInfo;