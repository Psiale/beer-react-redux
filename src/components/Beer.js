import React from 'react';
import PropTypes from 'prop-types';

const Beer = ({ beer }) => {
  const {
    name, tagline, description, image_url, food_pairing,
  } = beer;
  return (
    <>
      <div>{name}</div>
      <div>{tagline}</div>
      <div>{description}</div>
      <img src={image_url} alt="" />
      <div>
        {food_pairing}
      </div>
    </>
  );
};

Beer.propTypes = {
  beer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    food_pairing: PropTypes.array.isRequired,
  }).isRequired,
};

export default Beer;
