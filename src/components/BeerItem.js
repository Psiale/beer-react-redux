import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './BeerItem.module.css';
import NavBar from './NavBar';

const BeerItem = ({ item }) => {
  const {
    name, tagline, abv, description, image_url, food_pairing,
  } = item;
  return (
    <div className={styles.mainContainer}>
      <div className={styles.itemContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.imageChildContainer}>
            <img className={styles.image} src={image_url} alt="" />
          </div>
          <div className={styles.imgInfo}>
            <p>
              food Pairing:
            </p>
            {food_pairing.map(food => (
              <h3 key={food}>
                <span>* </span> {food}
              </h3>
            ))}
          </div>
        </div>
        <div className={styles.itemInfo}>
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
          <div className={styles.something}>
            <h2>
              Name:
            </h2>
            {name}
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
