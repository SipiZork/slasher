import React from 'react';
import PropTypes from 'prop-types';
import './Hud.scss';

const Hud = ({ cards, usedCards, inHandCards }) => {
  return (
    <div className="hud">
      <div className="available-cards cards" >
        <div className="cards-number card">{cards.length}</div>
      </div>
      <div className="hand-cards">
          {inHandCards.map(card => 
            <div className="card">
              <div className="card-mana">{card.mana}</div>
              <div className="card-name">{card.name}</div>
              <div className="card-image"></div>
              <div className="card-type">{card.type}</div>
              <div className="card-text">{card.text}</div>
            </div>
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
