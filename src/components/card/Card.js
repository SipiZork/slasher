import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss'

const Card = (card) => {
  const { mana, name, type, text, damage, defense, bonusDamage } = card.card;
  return (
    <div className="card">
      <div className="card-mana pointer-none">{mana}</div>
      <div className="card-name pointer-none">{name}</div>
      <div className="card-image pointer-none">Itt lesz a kép</div>
      <div className="card-type pointer-none">{type}</div>
      <div className="card-text pointer-none">{text}</div>
    </div>
  )
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
}

export default Card;
