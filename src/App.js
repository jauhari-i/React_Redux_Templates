import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

const App = ({ store, history }) => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <h1>Hello React</h1>
      </Router>
    </Provider>
  );
};

export default hot(App);

App.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};
