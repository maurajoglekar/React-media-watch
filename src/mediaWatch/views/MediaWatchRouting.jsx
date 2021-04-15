import PropTypes from 'prop-types';
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import MediaItemList from './MediaItemList';

const propTypes = {};
const defaultProps = {};

function MediaWatchRouting({ match }) {
  return (
    <BrowserRouter>
      <Route exact component={MediaItemList} path='/'/>
      <Route component={MediaItemList} path='/:medium'/>
    </BrowserRouter>
  );
}

MediaWatchRouting.propTypes = propTypes;
MediaWatchRouting.defaultProps = defaultProps;

export default MediaWatchRouting;
