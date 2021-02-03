import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import styles from './index.module.css';

// dispatch items from here.
ReactDOM.render(
  <React.StrictMode>
    <div className={styles.mainContainer}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
