import React from 'react';
import PropTypes from 'prop-types';

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
  <div>
    <select
      onChange={handleFilterChange}
      name="bookCategories"
      id="booksCategories"
    >
      {categories.map(category => (
        <option key={category}>{category}</option>
      ))}
    </select>
  </div>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
