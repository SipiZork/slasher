import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import daredevilImg from '../menu/assets/heroes/daredevil.png';
import enemyImg from './assets/enemy1.png';
import './Fight.scss';
import GameNavbar from '../game-navbar/GameNavbar';
import Card from '../card/Card';
import { damageEnemy } from '../../actions/fight';
import { shuffleDeck } from '../../actions/game';
import Hud from './Hud';

const Fight = ({ game, fight, damageEnemy, shuffleDeck }) => {

  const { hero } = game;
  const { turn } = fight;

  const [showCards, setShowCards] = useState(true);
  const [hideCards, setHideCards] = useState(false);

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min); 
  }

  const Cards = () => {
   

  }

  const startFight = () => {
    setHideCards(true);
    setTimeout(() => {
      shuffleDeck();
      setHideCards(false);
      setShowCards(false);
    }, 500);
  }

  useEffect(() => {
    // shuffleDeck()
  }, [shuffleDeck])

  return (
    <Fragment>
      <GameNavbar game/>
      <div className="game-container">
        <div className={`start-cards-container${showCards ? ' show' : ' remove'}${hideCards ? ' hide' : ''}`}>
          <div className="cards">
            {hero.cards.map(card => {
              console.log(card.name);
              return <Card card={card} />;
              }
            )}
          </div>
          <div className="start-btn btn" onClick={() => startFight()}>Küzdelem</div>
        </div>
        <div className="battlefield">
          <div className="own-hero characters" onClick={() => shuffleDeck()}>
            <img src={daredevilImg} />
            <div className="hp-bar">
              <div className="max-hp"></div>
              <div className="hp" style={{ width: `${hero.hp / hero.maxhp * 100 }%`}}></div>
              <p className="text">{`${hero.hp} / ${hero.maxhp}`}</p>
            </div>
          </div>
          <div className="enemies characters">
            {fight.enemies.map(enemy =>
              <div className="enemy" key={enemy.id} style={{ '--top': `${Math.random() > 0.5 ? -randomNumber(1,3) : randomNumber(1,3)}rem`}}>
                <div className="enemy-damage"><i className="fas fa-meteor"></i>{` ` + enemy.damage}</div>
                <img
                  className={`enemy-image${turn === 'hero' && ' cursor-pointer'}`}
                  src={enemyImg}
                  onClick={() => damageEnemy(enemy.id, enemy.damage)}
                />
                <div className="hp-bar enemy">
                  <div className="max-hp"></div>
                  <div className="hp" style={{ width: `${enemy.hp / enemy.maxhp * 100 }%`}}></div>
                  <p className="text">{`${enemy.hp} / ${enemy.maxhp}`}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <Hud cards={hero.cards} usedCards={hero.usedCards} inHandCards={hero.inHandCards} />
      </div>
    </Fragment>
  )
}

Fight.propTypes = {
  game: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  game: state.game,
  fight: state.fight
});

export default connect(mapStateToProps, { damageEnemy, shuffleDeck })(Fight);