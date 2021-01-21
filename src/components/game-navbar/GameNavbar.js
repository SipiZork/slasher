import React, {useState, Fragment} from 'react';
import PropTypes from 'prop-types';
import './GameNavbar.scss';

const GameNavbar = ({ game }) => {
  
  const [potionDetails, setPotionDetails] = useState({
    details: null,
    show: false
  });

  const showPotionDetail = (potion) => {
    if (potion !== null) {
      setPotionDetails({
        details: potion,
        show: !potionDetails.show
      });
    }
  }

  const drawPotions = (potion) => {
    return <Fragment>
      <i
      className={`fas ${potion !== null ? `${potion.icon} ${potion.type}` : 'fa-prescription-bottle'}`}
      onClick={() => showPotionDetail(potion) }>
        {potion !== null &&
          <div className={`potion-details ${potionDetails.show ? 'show' : 'hide'}`}>
            <h3 className={potion.type}>{`${potion.name} - ${potion.type}`}</h3>
            <p className="description">{potion.description}</p>
          </div>
        }
      </i>
    </Fragment>
  }

  return (
    <div className="game-navbar">
      <h2>SipiZork's Slasher v0.1</h2>
      <div className="game-infos">
        <div className="hp info">
          <i className="fas fa-heart"></i>{` ${game.hero.hp}/${game.hero.maxhp}`}
        </div>
        <div className="gold info">
          <i className="fas fa-coins"></i>{` `}{ game.hero.gold}
        </div>
        <div className="potions info">
          {game.hero.potions.map(potion => 
            drawPotions(potion)
          )}
        </div>
        {game.turn && game.turn > 0 ? (
          <div className="level info">{`${game.turn}. kör`}</div>
        ) : ''}
      </div>
    </div>
  )
}

GameNavbar.propTypes = {
  game: PropTypes.object.isRequired,
}

export default GameNavbar;
