import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Card from '../card/Card';
import './Hud.scss';

const Hud = ({ cards, usedCards, inHandCards, cardsToHand, showHand, selectedCardToPlay, showSelector, updateSelector }) => {

  const [inHand, setInHand] = useState(0);

  const createCards = (numberOfCards) => {
    let jsx = [];
    const leftCards = numberOfCards % 2 === 0 ? numberOfCards / 2 : numberOfCards / 2 -.5;
    const middleCard = numberOfCards % 2 === 0 ? 0 : 1;
    const rightCards = numberOfCards - leftCards - middleCard;
    let left = leftCards;
    let right = 1;
    for (let i = 0; i < numberOfCards; i++) {
      const style = {
        transform: `rotateZ(10deg)`
      }
      if (i < leftCards) {
        style.transform = `rotateZ(-${left * 5}deg)`;
        left--;
      } else if (middleCard === 1 && i === leftCards) {
        style.transform = `rotateZ(0deg)`;
      } else {
        style.transform = `rotateZ(${right * 5}deg)`;
        right++;
      }
      jsx.push(<div className={`cardy${selectedCardToPlay === inHandCards[i].id ? ' selected' : ''}`} style={style} key={i}><Card card={inHandCards[i]} showSelector={showSelector} updateSelector={updateSelector} selectedCardToPlay={selectedCardToPlay}/></div>);
    }
    return jsx;
  }

  return (
    <div className="hud">
      <div className="available-cards cards" >
        <div className="cards-number card">{cards.length}</div>
      </div>
      {showHand &&
        <div className="hand-cards" style={{ left: `calc(50% - ${inHandCards.length * 3.5}rem)` }}>
          {createCards(inHandCards.length)}
        </div>
      }
      <div className="used-cards cards">
        <div className="cards-number">{usedCards.length}</div>
      </div>
      {cardsToHand ?
        <div className="cards-to-hand">
          {inHandCards.map(card =>
            <div className='card-to-hand' key={card.id}></div> 
          )}
        </div>
        : ''
      }
    </div>
  )
}

Hud.propTypes = {
  cards: PropTypes.array.isRequired,
  usedCards: PropTypes.array.isRequired,
}

export default Hud;
