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
import buildLoader from './Loader';
import styles from './Home.module.css';

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
    (loading) ? buildLoader()
      : (
        <div className={styles.mainContainer}>
          <div className={styles.header}>
            BrewDogs Beer Catalogue
            <div className={styles.transparency} />
          </div>
          <Filter handleFilterChange={handleFilterChange} />
          <div className={styles.beerContainer}>
            {
        getItemsFiltered(items, filter).map(beer => (
          <div key={beer.id}>
            <Beer
              key={beer.id.toString()}
              handleOnClick={() => handleOnClick(beer)}
              category={filter}
              beer={{
                id: beer.id,
                abv: beer.abv,
                name: beer.name,
                tagline: beer.tagline,
                imageUrl: beer.image_url,
                foodPairing: beer.food_pairing,
              }}
            />
          </div>
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
      imageUrl: PropTypes.string,
      foodPairing: PropTypes.array,
    }),
  ).isRequired,
  fetchAllBeers: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  getSingleItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: state.itemsStore.items,
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
