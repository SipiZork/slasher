import React, {useState, Fragment} from 'react';
import PropTypes from 'prop-types';
import { createEnemies } from '../../actions/fight';
import './GameMap.scss';
import { connect } from 'react-redux';

const GameMap = ({ map, turn, createEnemies, history }) => {
  const { routes } = map;
  let counter = 0;
 
  const addCounter = () => {
    counter++;
  }

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min); 
  }

  const startLevel = (location) => {
    if (location.level === turn) {
      if (location.type = "fight") {
        createEnemies(location.enemies, turn);
        history.push('/fight');
      }
    }
  }

  return (
    <div className="map-container">
      {routes.map((route) => 
        <Fragment key={route.id}>
          {route.locations.map((location) =>
            <div className={`location ${location.level === turn ? 'available' : location.level < turn ? 'done' : 'unavailable'}`}
              style={{ '--location-counter': counter, '--left': Math.random() < 0.5 ? -randomNumber(0, 10) + 'rem' : randomNumber(0, 10) + 'rem' }}
              onClick={() => startLevel(location)}
              key={location.id}
            >
              {addCounter()}
              <i className={`fas fa-${location.icon}`}></i>
            </div>
          )}
        </Fragment>  
      )}
    </div>
  )
}

GameMap.propTypes = {
  map: PropTypes.object.isRequired,
  turn: PropTypes.number.isRequired,
}

const mapStateToProp = state => ({
  map: state.game.map,
  turn: state.game.turn
})

export default connect(mapStateToProp, { createEnemies })(GameMap);