import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';

const buildLoader = () => (
  <div className={styles.mainContainer}>
    <Loader
      className={styles.loader}
      type="Puff"
      color="rgb(18, 211, 236)"
      height={300}
      width={300}
      timeout={10000}
    />
  </div>
);

export default buildLoader;
