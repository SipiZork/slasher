import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GameNavbar from '../game-navbar/GameNavbar';
import GameMap from '../game-map/GameMap';

import './SelectRoute.scss';

const SelectRoute = ({ game, history }) => {
  const { map } = game;
  const { routes } = map;
  let allRoutes = [];

  routes.map(route => {
    allRoutes.push(route);
  })

  return (
    <Fragment>
      <GameNavbar hero={game.hero} turn={game.turn} />
      <GameMap history={history} />
    </Fragment>
  )
}

SelectRoute.propTypes = {
  game: PropTypes.object.isRequired,
}


const mapStateToProps = state => ({
  game: state.game
})

export default connect(mapStateToProps, null)(SelectRoute);
