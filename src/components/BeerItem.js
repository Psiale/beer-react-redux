/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './BeerItem.module.css';
import NavBar from './NavBar';

const BeerItem = ({ item }) => {
  const {
    name, tagline, description, image_url, food_pairing,
  } = item;
  return (
    <div className={styles.mainContainer}>
      <div className={styles.itemContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.imageChildContainer}>
            <img className={styles.image} src={image_url} alt="" />
          </div>
          <div className={styles.imgInfo}>
            <div className={styles.name}>
              <p>
                {name}
              </p>
            </div>
            <div>
              <span className={styles.tagline}>
                {tagline}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.itemInfo}>
          <div className={styles.description}>
            <p>
              Description
            </p>
            {description}
          </div>
          <div className={styles.foodPairing}>
            <p>
              Food Pairing
            </p>
            {food_pairing.map(food => (
              <div key={food}>
                {food}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.navBar}>
        <NavBar />
      </div>
    </div>
  );
};

BeerItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    food_pairing: PropTypes.array.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  item: state.itemsStore.item,
});

export default connect(mapStateToProps, null)(BeerItem);
