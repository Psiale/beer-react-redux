import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Filter from './Filter';
import changeFilter from '../redux/filter/filterActions';
import fetchAllBeers from '../redux';
import Beer from './Beer';
import { Link } from 'react-router-dom';

const Home = ({
  changeFilter, filter, items, fetchAllBeers,
}) => {
  const handleFilterChange = event => {
    changeFilter(event.target.value);
  };

  const getBeersFiltered = (arr, filter) => {
    if (filter === 'All') {
      return arr;
    }

    const rgx = new RegExp(filter, 'i');
    return arr.filter(beer => {
      // eslint-disable-next-line no-console
      console.log(beer.name.match(rgx));
      return beer.name.match(rgx);
    });
  };

  useEffect(() => {
    fetchAllBeers();
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
              key={beer.id}
              beer={{
                name: beer.name,
                abv: beer.abv,
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
  fetchAllBeers: PropTypes.func.isRequired,
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
  fetchAllBeers: () => dispatch(fetchAllBeers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
