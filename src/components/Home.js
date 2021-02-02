import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Filter from './Filter';
import changeFilter from '../redux/filter/filterActions';
import { getSingleItem } from '../redux/item/itemActions';
import fetchAllBeers from '../redux';
import getItemsFiltered from '../utils';
import Beer from './Beer';

const Home = ({
  changeFilter, filter, items, fetchAllBeers, loading, getSingleItem,
}) => {
  const handleFilterChange = event => {
    changeFilter(event.target.value);
  };
  const history = useHistory();

  const handleOnClick = beer => {
    getSingleItem(beer);
    history.push(`/beerItem/${beer.id}`);
  };

  useEffect(() => {
    fetchAllBeers(items);
  }, []);
  return (
    (loading) ? <p>Loading </p>
      : (
        <div>
          <Filter handleFilterChange={handleFilterChange} />
          <p>
            Hello from home;
          </p>
          <div>
            {
        getItemsFiltered(items, filter).map(beer => (
          <>
            <Beer
              key={beer.id}
              handleOnClick={() => handleOnClick(beer)}
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
      )
  );
};

Home.propTypes = {
  filter: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
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
  getSingleItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: state.itemsStore.items,
  error: state.itemsStore.error,
  loading: state.itemsStore.loading,
  filter: state.filterStore.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  },
  fetchAllBeers: () => dispatch(fetchAllBeers()),
  getSingleItem: item => dispatch(getSingleItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
