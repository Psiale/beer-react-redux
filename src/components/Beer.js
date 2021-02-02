/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const Beer = ({ beer, handleOnClick }) => {
  const {
    name, tagline, abv, description, image_url, food_pairing,
  } = beer;
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div onClick={handleOnClick}>
      <div>{name}</div>
      <div>{tagline}</div>
      <div>{abv}</div>
      <div>{description}</div>
      <img src={image_url} alt="" />
      <div>
        {food_pairing}
      </div>
    </div>
  );
};

Beer.propTypes = {
  beer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    abv: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    food_pairing: PropTypes.array.isRequired,
  }).isRequired,
  handleOnClick: PropTypes.isRequired,
};

export default Beer;
