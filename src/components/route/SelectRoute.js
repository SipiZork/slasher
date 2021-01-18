import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SelectRoute = ({ game }) => {
  const { map } = game;

  const createMap = (map) => {
    for (let [key, value] of Object.entries(map)) {
      console.log(key, value);
    }
  }

  return (
    <Fragment>
      {createMap(map)}
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
