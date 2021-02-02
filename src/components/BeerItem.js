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
        <div>{name}</div>
        <div>{tagline}</div>
        <div>{abv}</div>
        <div>{description}</div>
        <img src={image_url} alt="" />
        <div>
          {food_pairing.map(food => (
            <p key={food}>
              {food}
            </p>
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
