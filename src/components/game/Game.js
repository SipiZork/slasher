import React, {Fragment, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import GameNavbar from '../game-navbar/GameNavbar';
import SelectRoute from '../route/SelectRoute';
import Fight from '../game/Fight';
import { connect } from 'react-redux';
import NoMatch from '../errors/NoMatch';

const Game = ({ game, history, match }) => {

  const handleUri = () => {
    const locations = history.location.pathname.split('/');
    const gameUriStatus = locations[locations.length - 1];
    console.log(gameUriStatus);
    if (game.status !== gameUriStatus) {
      history.push(`/game/${game.status}`)
    }
  }

  useEffect(() => {
    handleUri();
  }, [])

  return (
    <Router>
      <Fragment>
        <div className="game-container">
          <GameNavbar hero={game.hero} turn={game.turn} />
          <Switch>
            <Route exact path='/' component={NoMatch}></Route>
            <Route exact path='/game/select-route' component={SelectRoute}></Route>
            <Route exact path='/game/fight' component={Fight}></Route>
          </Switch>
        </div>
      </Fragment>
    </Router>
  )
}

Game.propTypes = {
  game: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  game: state.game
})

export default connect(mapStateToProps)(Game);
