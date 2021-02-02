import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Filter from './Filter';
import changeFilter from '../redux/filter/filterActions';
import fetchBeers from '../redux';
import Beer from './Beer';

const Home = ({
  changeFilter, filter, items, fetchBeers,
}) => {
  const handleFilterChange = event => {
    changeFilter(event.target.value);
  };

  const getBeersFiltered = (arr, filter) => {
    if (filter === '') {
      return arr;
    }
    return arr.filter(beer => beer.name === filter);
  };
  useEffect(() => {
    fetchBeers();
  }, []);
  return (
    <div>
      <Filter handleFilterChange={handleFilterChange} />
      <p>
        Hello from home;
      </p>
      <div>
        {
        getBeersFiltered(items, filter).map(beer => (
          <>
            <Beer
              key={beer.name}
              beer={{
                name: beer.name,
                tagline: beer.tagline,
                description: beer.description,
                image_url: beer.image_url,
                food_pairing: beer.food_pairing,
              }}
            />
          </>
        ))
        }
      </div>
    </div>
  );
};

Home.propTypes = {
  filter: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      tagline: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      foodPairing: PropTypes.array.isRequired,
    }),
  ).isRequired,
  fetchBeers: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: state.itemsStore.items,
  filter: state.filterStore.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  },
  fetchBeers: () => dispatch(fetchBeers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
