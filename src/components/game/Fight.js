import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import daredevilImg from '../menu/assets/heroes/daredevil.png';
import './Fight.scss';
import GameNavbar from '../game-navbar/GameNavbar';

const Fight = ({ game, history }) => {

  const { hero } = game;

  return (
    <Fragment>
      <GameNavbar game/>
      <div className="game-container">
        <div className="battlefield">
          <div className="own-hero character">
            <img src={daredevilImg} />
            <div className="hp-bar">
              <div className="max-hp"></div>
              <div className="hp" style={{ width: `${hero.hp / hero.maxhp * 100 }%`}}></div>
              <p className="text">{`${hero.hp} / ${hero.maxhp}`}</p>
            </div>
          </div>
          <div className="enemies character"></div>
        </div>
      </div>
    </Fragment>
  )
}

Fight.propTypes = {
  game: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps, null)(Fight);