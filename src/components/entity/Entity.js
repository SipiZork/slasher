import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import './Entity.scss';

const Entity = ({ entity, img, type, turn }) => {
  return (
    <Fragment>
      {type === 'enemy' &&
        <div className="enemy-damage"><i className="fas fa-meteor"></i>{` ` + entity.damage}</div>
      }
      <img src={img} className={type === 'enemy' ? `enemy-image${turn === 'hero' ? ' cursor-pointer' : ''}` : ''}/>
      <div className={`hp-bar${type === 'enemy' ? ' enemy' : ''}`}>
        <div className="max-hp"></div>
        <div className={`hp${entity.armor > 0 ? ' armor' : ''}`} style={{ width: `${entity.armor > 0 ? '' : entity.hp / entity.maxhp * 100}%` }}></div>
        <p className="text">{`${entity.hp} / ${entity.maxhp}`}</p>
        {entity.armor > 0 && 
          <div className="armor-plate">
            <i className="fas fa-shield-alt"></i>
            <p>{entity.armor}</p>
          </div>
        }
      </div>
    </Fragment>
  )
}

Entity.propTypes = {

}

export default Entity;
