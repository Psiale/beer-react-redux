/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Beer.module.css';

const Beer = ({ beer, handleOnClick, category }) => {
  const {
    name, tagline, abv, image_url,
  } = beer;

  const filterColor = filter => {
    switch (filter) {
      case 'Pale Ale':
        return {
          backgroundColor: 'rgb(76, 246, 224)',
        };
      case 'Pale':
        return {
          backgroundColor: 'rgb(107, 23, 243)',
        };
      case 'Lager':
        return {
          backgroundColor: 'rgb(255, 39, 39)',
        };
      case 'Porter':
        return {
          backgroundColor: 'rgb(255, 136, 39)',
        };
      case 'Wheat':
        return {
          backgroundColor: 'rgb(231, 33, 125)',
        };
      case 'Stout':
        return {
          backgroundColor: ' rgb(18, 211, 236)',
        };
      case 'IPA':
        return {
          backgroundColor: 'rgb(158, 33, 231)',
        };
      case 'IMP':
        return {
          backgroundColor: 'rgb(143, 255, 52)',
        };

      default:
        return null;
    }
  };
  return (
    <div className={styles.mainContainer} onClick={handleOnClick}>
      {(category !== 'All') ? (
        <div className={styles.category} style={filterColor(category)}>
          {category}
        </div>
      ) : null }
      <img className={styles.image} src={image_url} alt="" />
      <div className={styles.name}>{name}</div>
      <div className={styles.abv}>
        Alcohol By Volume:
        {abv}
      </div>
      <div className={styles.tagline}>
        <span>
          {tagline}
        </span>
      </div>
    </div>
  );
};

Beer.propTypes = {
  beer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    abv: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
  }).isRequired,
  handleOnClick: PropTypes.func.isRequired,
  category: PropTypes.string,
};

Beer.defaultProps = {
  category: 'All',
};

export default Beer;
