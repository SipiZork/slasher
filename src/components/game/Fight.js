import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import daredevilImg from '../menu/assets/heroes/daredevil.png';
import enemyImg from './assets/enemy1.png';
import arrow from '../selector/selector-arrow.png';
import invertedArrow from '../selector/selector-arrow-inverted.png';
import './Fight.scss';
import GameNavbar from '../game-navbar/GameNavbar';
import Card from '../card/Card';
import Entity from '../entity/Entity';
import Selector from '../selector/Selector';
import { damageEnemy } from '../../actions/fight';
import { shuffleDeck, addCardToHand, selectCardToPlay } from '../../actions/game';
import Hud from './Hud';

const Fight = ({ game, fight, damageEnemy, shuffleDeck, addCardToHand, selectCardToPlay }) => {

  const { hero } = game;
  const { turn } = fight;

  const [showCards, setShowCards] = useState(true);
  const [hideCards, setHideCards] = useState(false);
  const [cardsToHand, setCardsToHand] = useState(false);
  const [showHand, setShowHand] = useState(false);
  const [showSelectEnemy, setShowSelectEnemy] = useState(null);
  const [showSelector, setShowSelector] = useState({
    show: false,
    left: 0,
    height: 0,
    width: 0,
    startTop: 0,
    startLeft: 0,
    img: arrow,
  });

  const updateSelector = (newAttr) => {
    setShowSelector({
      ...showSelector,
      ...newAttr
    })
  }

  const selectEnemy = (entity) => {
    console.log('showSelectEnemy', showSelectEnemy);
    if(showSelector.show) {
      setShowSelectEnemy(entity.id);
    }
    if(!showSelector.show) {
      setShowSelectEnemy(null);
    }
  }

  const deselectEnemy = () => {
    setShowSelectEnemy(null);
  }
  
  const drawSelector = (e) => {
    const { startLeft, startTop, top, left, width, height } = showSelector;
    const { pageY, pageX } = e;
    if (showSelector.show) {
      if (e.pageX > startLeft) {
        updateSelector({ left: startLeft, top: pageY - 80, height: startTop - pageY, width: pageX - left, img: arrow });
      } else {
        updateSelector({ left: pageX, top: pageY - 80, height: startTop - pageY, width: startLeft - pageX, img: invertedArrow });
      }
    }
  }

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min); 
  }

  const startFight = () => {
    shuffleDeck();
    setHideCards(true);
    addCardToHand(game.hero.cards);
    setTimeout(() => {
      setHideCards(false);
      setShowCards(false);
      setCardsToHand(true);
    }, 500);
    setTimeout(() => {
      setCardsToHand(false);
      setShowHand(true);
    }, 2500);
  }

  const removeCardSelect = () => {
    if (game.selectedCardToPlay !== null) {
      console.log('Kártya törölve');
      selectCardToPlay(null);
      setShowSelector({ show: false })
    }
  }

  const onRightClick = (e) => {
    e.preventDefault();
    removeCardSelect();
  }

  const onKeyUp = (e) => {
    if (e.code === 'Escape') {
      removeCardSelect();
    }
  }

  useEffect(() => {
    // shuffleDeck()
    document.addEventListener('keyup', (e) => onKeyUp(e));
  }, [shuffleDeck])

  return (
    <Fragment>
      <GameNavbar game/>
      <div className="game-container" onMouseMove={(e) => drawSelector(e)} onContextMenu={(e) => onRightClick(e)}>
        <div className={`start-cards-container${showCards ? ' show' : ' remove'}${hideCards ? ' hide' : ''}`}>
          <div className="cards">
            {hero.cards.map(card => {
              return <Card card={card} key={card.id} />;
              }
            )}
          </div>
          <div className="start-btn btn" onClick={() => startFight()}>Küzdelem</div>
        </div>
        <div className="battlefield">
          <div className="own-hero characters">
            <Entity entity={hero} img={daredevilImg} type="hero" />
          </div>
          <div className="enemies characters">
            {fight.enemies.map(enemy =>
              <div className={`enemy${showSelectEnemy !== null && showSelectEnemy === enemy.id ? ' selected' : ''}`} key={enemy.id} style={{ '--top': `${Math.random() > 0.5 ? -randomNumber(1, 3) : randomNumber(1, 3)}rem` }} onMouseEnter={() => selectEnemy(enemy)} onMouseLeave={() => deselectEnemy()}>
                <Entity entity={enemy} img={enemyImg} turn={turn} type='enemy' showSelector={showSelector}/>
              </div>
            )}
          </div>
        </div>
        <Selector showSelector={showSelector}/>
        <Hud cards={hero.cards} showSelector={showSelector} updateSelector={updateSelector} selectedCardToPlay={game.selectedCardToPlay} cardsToHand={cardsToHand} usedCards={hero.usedCards} inHandCards={hero.inHandCards} showHand={showHand} />
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

export default connect(mapStateToProps, { damageEnemy, shuffleDeck, addCardToHand, selectCardToPlay })(Fight);