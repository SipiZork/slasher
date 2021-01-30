import React from 'react';
import PropTypes from 'prop-types';
import { selectCardToPlay, addArmorToHero, removeCard, addToUsedCards } from '../../actions/game';
import { removeMana } from '../../actions/fight';
import { connect } from 'react-redux';
import './Card.scss'

const Card = ({card, selectCardToPlay, selectedCardToPlay, showSelector, updateSelector, addArmorToHero, removeMana, addToUsedCards, removeCard, fight }) => {
  const { mana, name, type, text, damage, defense, bonusDamage } = card;

  const selectCard = (e, card) => {
    if (card.type === 'attack') {
      if (selectedCardToPlay === card.id) {
        selectCardToPlay(null);
        if (updateSelector) {
          updateSelector({ show: false });
        }
      } else {
        selectCardToPlay(card);
        if (updateSelector) {
          updateSelector({ show: true, startLeft: e.pageX, startTop: e.pageY, width: 0, height: 0 });
        }
      }
    } else if (card.type === 'defend') {
      if (selectedCardToPlay === card.id) {
        if (fight.mana >= card.mana) {
          addArmorToHero(card.defense);
          removeCard(card.id);
          addToUsedCards(card);
          removeMana(card.mana);
        } 
      } else {
        selectCardToPlay(card);
      }
    }
  }

  return (
    <div className={`card${selectedCardToPlay === card.id ? ' selected' : ''}`} onClick={(e) => selectCard(e, card)}>
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
  selectCardToPlay: PropTypes.func.isRequired,
  updateSelector: PropTypes.func,
  addArmorToHero: PropTypes.func.isRequired,
  hero: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  fight: state.fight
})

export default connect(mapStateToProps, {selectCardToPlay, addArmorToHero, removeMana, removeCard, addToUsedCards})(Card);
