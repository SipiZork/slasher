import React, { useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './GameNavbar.scss';

const GameNavbar = ({ hero, turn }) => {
  
  const [potionDetails, setPotionDetails] = useState(false);

  const showPotionDetail = (potion) => {
    if (potion.name !== null) {
      setPotionDetails(true);
    }
  }

  const hidePotionDetail = () => {
    if (potionDetails) {
      setPotionDetails(false);
    }
  }

  const drawPotions = (potion) => {
    return <Fragment key={potion.id}>
      <i
      className={`fas ${potion.name !== null ? `${potion.icon} ${potion.type}` : 'fa-prescription-bottle'}`}
      onMouseEnter={() => showPotionDetail(potion) } onMouseLeave={() => hidePotionDetail()}>
        {potion.name !== null &&
          <div className={`potion-details ${potionDetails ? 'show' : 'hide'}`} key={potion.id}>
            <h3 className={potion.type}>{`${potion.name} - ${potion.type}`}</h3>
            <p className="description">{potion.description}</p>
          </div>
        }
      </i>
    </Fragment>
  }

  const { hp, maxhp, gold, potions } = hero;
  
  return (
    <div className="game-navbar">
      <Link to="/">
        <h2>SipiZork's Slasher v0.1</h2>
      </Link>
      <div className="game-infos">
        <div className="hp info">
          <i className="fas fa-heart"></i>{` ${hp}/${maxhp}`}
        </div>
        <div className="gold info">
          <i className="fas fa-coins"></i>{` `}{ gold}
        </div>
        <div className="potions info">
          {potions.map(potion => 
            drawPotions(potion)
          )}
        </div>
        {turn && turn > 0 ? (
          <div className="level info">{`${turn}. kör`}</div>
        ) : ''}
      </div>
    </div>
  )
}

GameNavbar.propTypes = {
  hero: PropTypes.object.isRequired,
  turn: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  hero: state.game.hero,
  turn: state.game.turn
})

export default withRouter(connect(mapStateToProps, null)(GameNavbar));
