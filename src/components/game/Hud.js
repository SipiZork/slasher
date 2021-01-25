import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/Card';
import './Hud.scss';

const Hud = ({ cards, usedCards, inHandCards }) => {
  return (
    <div className="hud">
      <div className="available-cards cards" >
        <div className="cards-number card">{cards.length}</div>
      </div>
      <div className="hand-cards">
          {inHandCards.map(card => 
            <Card card={card}/>
          )}
      </div>
      <div className="used-cards cards">
        <div className="cards-number">{usedCards.length}</div>
      </div>
    </div>
  )
}

Hud.propTypes = {
  cards: PropTypes.array.isRequired,
  usedCards: PropTypes.array.isRequired,
}

export default Hud;
