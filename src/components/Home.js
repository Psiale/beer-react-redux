import React from 'react';
import NavBar from './NavBar';
import {connect} from 'react-redux';

const Home = ({filter}) => (
  <div>
    <div>
      <NavBar />
      <p>
        Hello from home;
      </p>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  filter: state.filter,
});

export default Home;
