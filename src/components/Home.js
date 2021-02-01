import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import changeFilter from '../redux/filter/filterActions';

const Home = ({ filter }) => (
  <div>
    <div>
      <NavBar />
      <p>
        Hello from home;
      </p>
    </div>
  </div>
);

const mapStateToProps = state => ({
  filter: state.filterStore.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
