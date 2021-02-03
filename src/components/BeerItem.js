import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import NavBar from './NavBar';

const BeerItem = ({ item }) => {
  const {
    name, tagline, abv, description, image_url, food_pairing,
  } = item;
  return (
    <div>
      <div>
        <div>
          <h2>
            Name:
          </h2>
          {name}
        </div>
        <div>
          <h2>
            Tagline:
          </h2>
          {tagline}
        </div>
        <div>
          <h2>
            Alcohol Perecentage:
          </h2>
          {abv}
        </div>
        <div>
          <h2>
            Description:
          </h2>
          {description}
        </div>
        <img src={image_url} alt="" />
        <div>
          <h2>
            Ingredients:
          </h2>
          {food_pairing.map(food => (
            <h3 key={food}>
              *
              {food}
            </h3>
          ))}
        </div>
      </div>
      <NavBar />
    </div>
  );
};

BeerItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    abv: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    food_pairing: PropTypes.array.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  item: state.itemsStore.item,
});

export default connect(mapStateToProps, null)(BeerItem);
