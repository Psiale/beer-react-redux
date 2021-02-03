import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const categories = [
  'All',
  'Pale Ale',
  'Pale',
  'Lager',
  'Porter',
  'Wheat',
  'Stout',
  'IPA',
  'IMP',
];

const CategoryFilter = ({ handleFilterChange }) => (
  <div className={styles.header}>
    <select
      className={styles.select}
      onChange={handleFilterChange}
      name="bookCategories"
      id="booksCategories"
    >
      {categories.map(category => (
        <option className={styles.option} key={category}>{category}</option>
      ))}
    </select>
  </div>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
