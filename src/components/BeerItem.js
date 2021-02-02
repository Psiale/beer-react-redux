import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';

const BeerItem = ({ beer }) => {
  const {
    name, tagline, abv, description, image_url, food_pairing,
  } = beer;
  return (
    <div>
      <div>
        <NavBar />
        <div>{name}</div>
        <div>{tagline}</div>
        <div>{abv}</div>
        <div>{description}</div>
        <img src={image_url} alt="" />
        <div>
          {food_pairing}
        </div>
      </div>
    </div>
  );
};

BeerItem.propTypes = {
  beer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    abv: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    food_pairing: PropTypes.array.isRequired,
  }).isRequired,
};

export default BeerItem;
